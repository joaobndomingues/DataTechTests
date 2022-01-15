import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import cores from '../assets/colors/colors';

export default function Botao_Entrar_Login(valores) {

    return (
        <Pressable 
            style = {styles.Btn_Entrar} 
            onPress={valores.funcao} >
            <Text style = {styles.texto_botao}>{valores.texto}</Text>
        </Pressable>
    );

}


const styles = StyleSheet.create({

    Btn_Entrar: {
        height: 60,
        width: 255,
        backgroundColor: cores.botoes,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 40,
    },

    texto_botao: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
    },

});