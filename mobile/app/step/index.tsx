import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native'
import { colors } from '../../constants/Colors'
import { Header } from '../../components/header'
import { Input } from '@/components/input'
import {userDataStore } from '../../store/data'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'

/*explicaçao das tags de import
    -- ScrollView: Componente que permite rolagem de conteúdo
*/

// schema de validação usando Zod
const schema = z.object({
    name: z.string().min(1, { message: "O nome é obrigatório" }),
    weight: z.string().min(1, { message: "O peso é obrigatório" }),
    height: z.string().min(1, { message: "A altura é obrigatória" }),
    age: z.string().min(1, { message: "A idade é obrigatória" }),
})
type FormData = z.infer<typeof schema> // Define o tipo de dados do formulário

export default function Step() {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
        resolver: zodResolver(schema), // Integração do Zod com React Hook Form
    })


    //pegar a função setPageOne da data
    const setPageOne = userDataStore((state) => state.setPageOne)

    function handleCreate(data: FormData) {
        console.log('Guardando dados da página 1');
        setPageOne({
            name: data.name,
            weight: data.weight,
            height: data.height,
            age: data.age,
        })

        router.push("/create") // Navega para a próxima tela
    }


    return (

        <View style={styles.container}>
            <Header
                step='Passo 1'
                title='Vamos Começar'
            />

            <ScrollView style={styles.content}>

                {/*Nome */}
                <Text style={styles.label}>Nome:</Text>
                <Input
                    name='name'
                    control={control}
                    placeholder='Digite seu nome'
                    error={errors.name?.message}
                    keybordType='default'
                ></Input>

                {/*Peso atual */}
                <Text style={styles.label}>Seu Peso atual:</Text>
                <Input
                    name='weight'
                    control={control}
                    placeholder='Ex: 70'
                    error={errors.weight?.message}
                    keybordType='numeric'
                ></Input>

                {/*Altura */}
                <Text style={styles.label}>Sua Altura:</Text>
                <Input
                    name='height'
                    control={control}
                    placeholder='Ex: 1.70'
                    error={errors.height?.message}
                    keybordType='numeric'
                ></Input>

                {/*Idade */}
                <Text style={styles.label}>Sua Idade:</Text>
                <Input
                    name='age'
                    control={control}
                    placeholder='Ex: 30'
                    error={errors.age?.message}
                    keybordType='numeric'
                ></Input>

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
    button: {
        backgroundColor: colors.blue,
        height: 44,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',

    }
})