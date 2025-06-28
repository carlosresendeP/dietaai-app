import { Text, View, StyleSheet, ScrollView, Pressable, Share } from 'react-native'
import { colors } from '../../constants/Colors'
import { api } from '@/services/api'
import { useQuery, } from '@tanstack/react-query'

import { userDataStore } from '@/store/data'
import { Data } from "../../types/data"
import { Link, router } from "expo-router"
import { Ionicons, Feather } from '@expo/vector-icons'

interface ResponceData {
    data: Data
}

export default function nutrition() {

    const user = userDataStore((state) => state.user)

    const { data, isFetched, error } = useQuery({
        //chave de consulta para identificar a consulta
        queryKey: ['nutrition'],

        queryFn: async () => {
            try {
                if (!user) {
                    throw new Error('Usuário não encontrado')
                }
                //response de teste
                //const response = await api.get<ResponceData>('/test')

                const response = await api.post<ResponceData>('/create', {
                    name: user.name,
                    age: user.age,
                    weight: user.weight,
                    height: user.height,
                    gender: user.gender,
                    objective: user.objective,
                    level: user.level,
                })

                console.log('Response:', response.data)

                return response.data.data

            } catch (error) {
                console.log(error)
                throw new Error('Erro ao buscar dados da dieta')
                return null
            }
        },
    })


    //Função para compartilhar a dieta
    async function handleShare() {
        try {
            if (data && Object.keys(data).length === 0) return;

            const supplements = `${data?.suplementos.map(item => `${item}`)}`

            const foods = `${data?.refeicoes.map(item => `\n
                - Nome: ${item.nome}\n
                - Horário: ${item.horario}\n
                - Alimentos: ${item.alimentos.map(alimento => `${alimento}`)}`)}`

            const message = `Minha dieta: ${data?.nome} -Objetivo: ${data?.objetivo}\n\n ${foods}\n\n-Dica Suplementos: ${supplements}`

            await Share.share({
                message: message,
            })
        } catch (error) {
            console.log('Erro ao compartilhar:', error)
            return null
        }
    }

    //verifica se a consulta foi concluída
    if (isFetched === false) {
        return (
            <View style={styles.loading}>
                <Text style={styles.loadingText}>Estamos gerando sua dieta!</Text>
                <Text style={styles.loadingText}>Cosultando IA...</Text>
            </View>
        )
    }

    //verifica se houve erro na consulta
    if (error) {
        return (
            <View style={styles.loading}>
                <Text style={styles.loadingText}>Falha ao gerar Dieta</Text>
                <Link href={'/step'}>
                    <Text style={styles.loadingText}>Tente novamente</Text>
                </Link>

            </View>
        )
    }



    //renderiza os dados da dieta
    return (
        <View style={styles.container}>

            <View style={styles.containerHeader}>
                <View style={styles.contentHeader}>
                    <Text style={styles.title}>
                        Minha Dieta
                    </Text>

                    <Pressable style={styles.buttonShare} onPress={handleShare}>
                        <Text style={styles.buttonShareText}>
                            Compartilhar
                        </Text>
                    </Pressable>
                </View>
            </View>

            <View style={{ paddingLeft: 16, paddingRight: 16, flex: 1 }}>
                {data && Object.keys(data).length > 0 && (

                    <>
                        <Text style={styles.name}>Nome: {data.nome}</Text>
                        <Text style={styles.objectve}>{data.objetivo}</Text>

                        <Text style={styles.label}>
                            Refeições:

                            <ScrollView>
                                <View style={styles.foods}>
                                    {data.refeicoes.map((refeicao) => (
                                        <View key={refeicao.nome} style={styles.food} >
                                            <View style={styles.foodHeader}>
                                                <Text style={styles.foodName}>{refeicao.nome}</Text>
                                                <Ionicons name='restaurant' size={16} color='#000' />
                                            </View>

                                            <View style={styles.foodContent}>
                                                <Feather name='clock' size={14} color="#000" />
                                                <Text>Horário: {refeicao.horario}</Text>
                                            </View>

                                            <Text style={styles.foodText}>Alimentos:</Text>
                                            {refeicao.alimentos.map((alimento) => (
                                                <Text key={alimento}>{alimento}</Text>
                                            ))}

                                        </View>
                                    ))}
                                </View>


                                <View style={styles.supplements}>
                                    <Text style={styles.foodName}>Dica de suplementos: </Text>
                                    {data.suplementos.map((suplemento) => (
                                        <Text key={suplemento} style={styles.foodText}>{suplemento}</Text>
                                    ))}
                                </View>

                                <Pressable style={styles.button} onPress={() => router.replace('/')}>
                                    <Text style={styles.buutonText}>
                                        Gerar nova dieta
                                    </Text>
                                </Pressable>
                            </ScrollView>
                        </Text>
                    </>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 18,
        color: colors.white,
        marginBottom: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: colors.background,
        flex: 1,
    },
    containerHeader: {
        backgroundColor: colors.white,
        paddingTop: 60,
        paddingBottom: 20,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        marginBottom: 16,
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.background,
    },
    buttonShare: {
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 4,
    },
    buttonShareText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,

    },
    objectve: {
        fontSize: 16,
        color: colors.white,
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        color: colors.white,

        fontWeight: 'bold',
    },
    foods: {
        backgroundColor: colors.white,
        marginTop: 8,
        padding: 8,
        borderRadius: 8,
        gap: 8,
    },
    food: {

        padding: 8,
        borderRadius: 8,
        backgroundColor: 'rgba(208, 208, 208, 0.2)',
    },
    foodHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    foodName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    foodContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 4,
    },
    foodText: {
        fontSize: 16,

        marginTop: 14,
        marginBottom: 4,
    },
    supplements: {
        backgroundColor: colors.white,
        padding: 8,
        borderRadius: 8,
        marginTop: 14,
        marginBottom: 14,
    },
    button: {
        backgroundColor: colors.blue,
        padding: 8,
        borderRadius: 8,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    buutonText: {
        color: colors.white,
        fontWeight: '500',

    },
})



/*Explicação
 -- useQuery -> é um hook do React Query que permite fazer consultas assíncronas a dados.
 - queryKey -> é a chave de consulta que identifica a consulta. É usada para armazenar e recuperar dados do cache.
 - queryFn -> é a função que será executada para buscar os dados. Ela deve retornar uma Promise que resolve com os dados.
 - isFetched -> é um booleano que indica se a consulta foi concluída com sucesso.


*/