import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import cores from '../assets/colors/colors';

export default function Dicas_Component(valores) {
    return (
        <View key = { valores.valores.key } style = { styles.container_item_scroll }>
            <Text style = {styles.text_titulo_dica}> Dica #{valores.valores.key}</Text>
            <Text style = { styles.text_item_scroll }>{ valores.valores.texto }</Text>

        </View>
    );

}


const styles = StyleSheet.create({

    container_item_scroll: {
        backgroundColor: cores.dicas_fundo_2,
        width: 300,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: "center",
        borderRadius: 20,
    },

    text_item_scroll: {
        flex: 1,
        fontSize: 20,
        color: cores.dicas_letras_2,
        padding: 15,
    },

    text_titulo_dica: {
        fontSize: 30,
        fontWeight: "bold",
        color: cores.dicas_letras_1,
        padding: 15,
    }

});