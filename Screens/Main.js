import React from "react";
import {ScrollView, View, Text, StyleSheet, TextInput, Pressable, Image} from "react-native";
import {useState} from 'react';
import cores from '../assets/colors/colors';
import Dicas from "../Components/Dicas_component";
import Botao_Dica from "../Components/Botao_Dica";
import Botao_Home from "../Components/Botao_Home";
import Botao_Perfil from "../Components/Botao_Perfil";
<<<<<<< HEAD
import Sensor from "../Components/Sensor";

import AsyncStorage from '@react-native-async-storage/async-storage';
=======
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383


const Main_Screen = ({navigation}) => {

<<<<<<< HEAD
    const [nome_utilizador, setNomeUtilizador] = useState("");

    AsyncStorage.getItem('key').then(value =>{
        if(value != null){
            setNomeUtilizador(value);
            console.log(nome_utilizador);
            console.log(value);
        }
    });
=======
    const [nome_utilizador, setNomeUtilizador] = useState("Nome");
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383

    function Click_Dicas() {
        console.log("Clicou botao dicas");
        navigation.navigate("Dicas_Screen");
    }
    function Click_Home() {
        console.log("Clicou botao home");
    }
    function Click_Perfil() {
        console.log("Clicou botao perfil");
    }

    

    return (
        <View style = {styles.ecra_total}>

            <View style = {styles.container_texto_inicio}>
                <Text style= {styles.texto_titulo_pagina}>Olá, {nome_utilizador}!</Text>
                <Text style= {styles.texto_confira_dicas}>
                    Consulte a sua utilização aqui!
                </Text>
            </View>

            <View style = {styles.container_scroll}>

<<<<<<< HEAD
                <View style = {styles.container_sensor}>
                    <Text style= {styles.texto_sensor}>
                        Sensor
                    </Text>

                    < Sensor ativo = "on" />

                </View>
=======
                
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383

            </View>

            <View style= {styles.container_botoes_menu}>
                < Botao_Dica   ativo = "off" funcao = {Click_Dicas}/>

                < Botao_Home   ativo = "on" funcao = {Click_Home}/>

                < Botao_Perfil ativo = "off" funcao = {Click_Perfil}/>
            </View>

        </View>

    );
};

export default Main_Screen;


const styles = StyleSheet.create({

    ecra_total:{
        flex: 1,
        backgroundColor: cores.fundo_ecra,
    },

    container_texto_inicio: {
        marginTop: 50,
        backgroundColor: cores.fundo_ecra,
    },

    texto_titulo_pagina: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        padding: 15,
    },

    texto_confira_dicas: {
        top: -20,
        fontSize: 20,
        color: "black",
        padding: 15,
    },

    container_scroll: {
        flex: 1,
        backgroundColor: cores.dicas_fundo_1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },  

    container_botoes_menu: {
        backgroundColor: cores.fundo_ecra,
        height: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "space-between",
        alignItems: "center",
<<<<<<< HEAD
    },

    container_sensor: {
        backgroundColor: cores.fundo_sensores,
        height: 100,
        top: 460,
    },

    texto_sensor: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 25,
        color: "white",
        padding: 15,
        fontWeight: "bold",
    },

=======
    }
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383
    
});