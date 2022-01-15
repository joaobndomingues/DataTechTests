import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import cores from '../assets/colors/colors';

export default function Botao_Registo_Login(valores) {

    return (
        <Pressable 
            style = {styles.container_registo} 
            onPress={valores.funcao} >
            <Text style = {styles.Texto_Registo}>{valores.texto}</Text>
        </Pressable>
    );

}


const styles = StyleSheet.create({

    Texto_Registo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: cores.botoes,
    },

    container_registo:{
        backgroundColor: cores.fundo_ecra,
        marginLeft: 10,
    },

});