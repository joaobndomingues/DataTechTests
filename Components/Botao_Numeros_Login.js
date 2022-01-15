import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import cores from '../assets/colors/colors';

export default function Botao_Numeros_Login(valores) {

    return (
        <Pressable 
            style = {styles.Btn_numero} 
            onPress = {valores.funcao}>
            <Text style = {styles.texto_botao}>{valores.texto}</Text>
        </Pressable>
    );

}


const styles = StyleSheet.create({

    Btn_numero: {
        height: 70,
        width: 70,
        borderRadius: 10,
        backgroundColor: cores.botoes,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    texto_botao: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
    },

});