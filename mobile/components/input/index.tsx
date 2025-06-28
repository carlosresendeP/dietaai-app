import { View, StyleSheet, Text, TextInput, KeyboardTypeOptions } from "react-native";
import { Controller } from "react-hook-form"
import { colors } from "@/constants/Colors";

interface InputProps {
    name: string;
    control: any;
    placeholder?: string;
    rules?: any;
    error?: string;
    keybordType?: KeyboardTypeOptions;
}


export function Input({ name, control, placeholder, rules, error, keybordType }: InputProps) {

    return (
        <View style={styles.container}>


            <Controller
                control={control} //controlador do react-hook-form
                name={name} //nome do campo
                rules={rules} //regras de validação do campo
                render={({ field: { onChange, onBlur, value } }) => ( //renderiza o campo de entrada
                //onChange: função chamada quando o usuário digita algo
                //onBlur: função chamada quando o usuário sai do campo
                //value: valor atual do campo


                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChange} //quando o usuário digitar algo
                    onBlur={onBlur} //quando o usuário sair do campo
                    value={value} //valor do campo
                    keyboardType={keybordType} //tipo de teclado (default, numeric, email-address, etc.)

                />
            )}
            />

            {error && <Text style={styles.errorText}>{error}</Text>}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginBottom: 16,
    },
    input: {
        height: 44,
        borderColor: colors.white,
        borderRadius: 4,
        paddingHorizontal: 10, //espaçamento na esquerda e direita
        fontSize: 16,
    },

    errorText:{
        color: "red",
        fontSize: 12,
        marginTop: 4,
    }
});