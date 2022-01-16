import React from "react";
import {ScrollView, View, Text, StyleSheet, TextInput, Pressable, Image} from "react-native";
import {useState} from 'react';
import cores from '../assets/colors/colors';
import Dicas from "../Components/Dicas_component";
import Botao_Dica from "../Components/Botao_Dica";
import Botao_Home from "../Components/Botao_Home";
import Botao_Perfil from "../Components/Botao_Perfil";

const dicas =[
            {key: 1,
            texto: "Tenha uma visão positiva de você. Tudo começa dentro de nós, se as pessoas não estão felizes consigo mesmas, elas tendem a focar nos problemas e dificuldades, e não na solução e no lado positivo.",},
            {key: 2,
            texto: "Respire fundo. Expanda o seu diafragma e inspire lentamente, expandindo o seu peito. Liberte lentamente o ar. Faça isso várias vezes ao dia. A respiração profunda anula o estresse.",},
            {key: 3,
            texto: "Comece o dia agradecendo. Procure agradecer por todas as coisas boas que acontecem na sua vida, ao invés de reclamar. Aproveite ainda esse momento para pensar nas coisas que irá realizar durante o dia, e tenha só pensamentos positivos. Essa é uma das dicas rápidas de saúde e bem estar mais importantes!",},
            {key: 4,
            texto: "Faça musculação pelo menos duas vezes por semana. Essa dica é para manter a forma e tonificar os músculos. O exercício muscular mantém sua taxa metabólica alta e ajuda a queimar gordura. Faça alongamento antes e após o exercício. Procure um profissional de educação física para ajudar nesse processo.",},
            {key: 5,
            texto: "Tome um bom café da manhã. O café da manhã fornece nutrientes essenciais que são armazenados como energia para abastecê-lo durante seu dia. Opte sempre por alimentos saudáveis. Adicione frutas ricas em antioxidantes ao seu cereal matinal favorito.",},
        ]



const Dicas_Screen = ({navigation}) => {

    function Click_Dicas() {
        console.log("Clicou botao dicas");
    }
    function Click_Home() {
        console.log("Clicou botao home");
        navigation.navigate("Main_Screen");
    }
    function Click_Perfil() {
        console.log("Clicou botao perfil");
    }

    

    return (
        <View style = {styles.ecra_total}>

            <View style = {styles.container_texto_inicio}>
                <Text style= {styles.texto_titulo_pagina}>Dicas e Truques</Text>
                <Text style= {styles.texto_confira_dicas}>
                    Confira algumas dicas de saúde!
                </Text>
            </View>

            <ScrollView style = {styles.container_scroll}>

                {
                    dicas.map(( dica ) =>
                    (
                          
                        <Dicas  valores = {dica} />
           
                      
                    ))
                }

            </ScrollView>

            <View style= {styles.container_botoes_menu}>
                < Botao_Dica   ativo = "on" funcao = {Click_Dicas}/>

                < Botao_Home   ativo = "off" funcao = {Click_Home}/>

                < Botao_Perfil ativo = "off" funcao = {Click_Perfil}/>
            </View>

        </View>

    );
};

export default Dicas_Screen;


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

    texto_confira_dicas: {
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
    }
    
});