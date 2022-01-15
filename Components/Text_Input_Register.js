import React from "react";
import {TextInput, StyleSheet} from "react-native";
import cores from '../assets/colors/colors';


export default function Text_Input_Register(valores) {
    
    return (
        <TextInput
            placeholder = {valores.texto}
            style = {styles.Input}
            onChangeText={valores.funcao}
        />
    );
    
}


const styles = StyleSheet.create({

    Input: {
        width: 350,
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        left: 30,
        backgroundColor: cores.cria_conta,
        color: cores.fundo_ecra,
        padding: 12,
        fontSize: 17,
    },

});