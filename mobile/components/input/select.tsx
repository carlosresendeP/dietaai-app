import { View, StyleSheet, Text, TouchableOpacity, FlatList, Modal } from "react-native";
import { Controller } from "react-hook-form"
import { colors } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons"
import { useState } from "react";

interface OptionsProps {
    label: string;
    value: string | number;
}

interface SelectProps {
    name: string;
    control: any;
    placeholder?: string;
    error?: string;
    options: OptionsProps[];
}


export function Select({ name, control, placeholder, error, options }: SelectProps) {

    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>


            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <TouchableOpacity style={styles.select} onPress={() => setVisible(true)}>
                            <Text>{value ? options.find(options => options.value === value)?.label : placeholder}</Text>
                            <Feather
                                name="arrow-down"
                                size={16}
                                color={colors.black}
                            />
                        </TouchableOpacity>

                        <Modal
                            visible={visible}
                            animationType="fade"
                            transparent={true}
                            onRequestClose={() => setVisible(false)}
                        >
                            <TouchableOpacity
                                style={styles.modalContainer}
                                activeOpacity={1}
                                onPress={() => setVisible(false)}
                            >
                                <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
                                    <FlatList
                                        contentContainerStyle={{ gap: 4 }}
                                        data={options}
                                        keyExtractor={(item) => item.value.toString()}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                style={styles.option}

                                                onPress={() => {
                                                    onChange(item.value)
                                                    setVisible(false)
                                                }}
                                            >
                                                <Text>
                                                    {item.label}
                                                </Text>
                                            </TouchableOpacity>
                                        )}
                                    />

                                </TouchableOpacity>
                            </TouchableOpacity>
                        </Modal>
                    </>
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

    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 4,
    },
    select: {
        flexDirection: 'row',
        height: 44,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 4
    },
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: colors.white,
        marginHorizontal: 10,
        borderRadius: 8,
        padding: 20,
    },
    option: {
        paddingVertical: 10,
        backgroundColor: 'rgba(208,208,208,0.5)',
        borderRadius: 4,
        paddingHorizontal: 8,
    }
});



/*
Explicaçaõ do codigo
find => encontra o primeiro elemento que satisfaz a condição

*/ 