import { View, Text, Image, StyleSheet, Pressable, SafeAreaView, Platform, StatusBar } from 'react-native'

/* explicaçao das tags de import
    -- View: Componente de contêiner básico
    -- Text: Componente para exibir texto 
    -- Image: Componente para exibir imagens
    -- StyleSheet: Utilitário para criar estilos
    -- Pressable: Componente que responde a toques
    -- SafeAreaView: Componente que ajusta o layout para evitar áreas não seguras
    -- Platform: Utilitário para verificar a plataforma (iOS/Android)
    -- StatusBar: Componente para controlar a barra de status do dispositivo
*/

import { Feather } from '@expo/vector-icons'
import { colors } from '@/constants/Colors'
import { router } from 'expo-router'

interface HeaderProps {
    step: string;
    title: string;
}

export function Header({ step, title }: HeaderProps) {


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <View style={styles.row}>
                    <Pressable onPress={() => router.back()}>
                        <Feather name="arrow-left" size={24} color={colors.black} />
                    </Pressable>

                    <Text style={styles.text}>
                        {step} <Feather name='loader' size={16} color={colors.black} />
                    </Text>
                </View>

                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14,
        marginBottom: 14,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 34 : 34,
    },
    content: {
        paddingRight: 16,
        paddingLeft: 16,
        paddingBottom: 34,
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14,
    },
    row: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: colors.black,
        marginLeft: 8,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.black,
        marginTop: 8,
    },

})