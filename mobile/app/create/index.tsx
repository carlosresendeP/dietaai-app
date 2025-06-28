import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native'
import { colors } from '../../constants/Colors'
import { Header } from '../../components/header'
import {userDataStore } from '../../store/data'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Select } from '@/components/input/select'
import { router } from 'expo-router'

/*explicaçao das tags de import
    -- ScrollView: Componente que permite rolagem de conteúdo
*/

// schema de validação usando Zod
const schema = z.object({
    gender: z.string().min(1, { message: "O genero é obrigatório" }),
    objective: z.string().min(1, { message: "O objetivo é obrigatório" }),
    level: z.string().min(1, { message: "Selecione seu nível" }),

})
type FormData = z.infer<typeof schema> // Define o tipo de dados do formulário

export default function create() {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
        resolver: zodResolver(schema), // Integração do Zod com React Hook Form
    })

    //pegar a função setPageTwo da data
    const setPageTwo = userDataStore((state) => state.setPageTwo)

    const genderOptions = [
        { label: 'Masculino', value: "Masculino" },
        { label: 'Feminino', value: "Feminino" },
        { label: 'Outro', value: "Outro" },
    ]
    const levelOptions = [
        { label: 'Sedentário', value: "Sedentário" },
        { label: 'Levemente ativo', value: "Levemente ativo" },
        { label: 'Moderadamente ativo', value: "Moderadamente ativo" },
        { label: 'Ativo', value: "Ativo" },
        { label: 'Muito ativo', value: "Muito ativo" },
    ]
    const objectiveOptions = [
        { label: 'Emagrecimento', value: "Emagrecimento" },
        { label: 'Hipertrofia', value: "Hipertrofia" },
        { label: 'Hipertrofia + Definição', value: "Hipertrofia + Definição" },
        { label: 'Definição', value: "Definição" },
    ]


    
    function handleCreate(data: FormData) {
        console.log('Dados do passo 2:', data);

        setPageTwo({
            level: data.level,
            objective: data.objective,
            gender: data.gender
        })

        router.push("/nutrition") // Navega para a próxima tela

    }

    return (

        <View style={styles.container}>
            <Header
                step='Passo 2'
                title='Finalizando Dieta'
            />

            <ScrollView style={styles.content}>
                {/*1*/}
                <Text style={styles.label}>
                    Sexo
                </Text>    
                <Select
                control={control}
                name='gender'
                placeholder='Selecione seu sexo'
                error={errors.gender?.message}
                options={genderOptions}
                />
                
                {/*2*/}
                <Text style={styles.label}>
                    Selecione o nível de atividade física
                </Text>    
                <Select
                control={control}
                name='level'
                placeholder='Selecione seu nível'
                error={errors.level?.message}
                options={levelOptions}
                />

                {/*3*/}
                <Text style={styles.label}>
                    Selecione o seu objetivo
                </Text>    
                <Select
                control={control}
                name='objective'
                placeholder='Selecione seu objetivo'
                error={errors.objective?.message}
                options={objectiveOptions}
                />

                <Pressable style={styles.button} onPress={handleSubmit(handleCreate)} disabled={!isValid}>
                    <Text style={styles.buttonText}>
                        Avançar
                    </Text>
                </Pressable>


            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    label: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    button:{
        backgroundColor: colors.blue,
        height: 44,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    buttonText:{
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',

    }
})