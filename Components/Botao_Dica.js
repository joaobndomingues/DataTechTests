import React from "react";
import {Pressable, StyleSheet, Text, Image, View} from "react-native";
import cores from '../assets/colors/colors';

export default function Botao_Dica(valores) {


    if(valores.ativo == "on"){

        return (
            <Pressable  style = {styles.Btn_Entrar}  onPress={valores.funcao} >

                <View style = {styles.container_imagem_on}> 
                    <Image
                        style = {styles.image}
                        source = {require("../assets/images/dica_on.png")}
                    />
                </View>
                <Text style = {styles.texto_botao_on}>Dicas</Text>
            </Pressable>
        );
    }
    else{

        return (
            <Pressable  style = {styles.Btn_Entrar}  onPress={valores.funcao} >

                <View style = {styles.container_imagem_off}> 
                    <Image
                        style = {styles.image}
                        source = {require("../assets/images/dica_off.png")}
                    />
                </View>
                <Text style = {styles.texto_botao_off}>Dicas</Text>
            </Pressable>
        );
    }

}


const styles = StyleSheet.create({

    image: {
        top: 15,
        height: 20,
        width: 20,
        marginLeft: 10,
        marginRight: 10,

    },

    Btn_Entrar: {
        height: 80,
        width: 80,
        backgroundColor: cores.fundo_ecra,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 10,
    },

    
    container_imagem_on:{
        backgroundColor: cores.botoes,
        height: 50,
        width: 50,
        alignItems: "center",
        borderRadius: 10,
    },

    texto_botao_on: {
        fontSize: 15,
        color: cores.botoes,
    },

    container_imagem_off:{
        backgroundColor: cores.fundo_ecra,
        height: 50,
        width: 50,
        alignItems: "center",
        borderRadius: 10,
    },

    texto_botao_off: {
        fontSize: 15,
        color: cores.fundo_sensores,
    },

});