import React from "react";
import {Pressable, StyleSheet, Image, View} from "react-native";
import cores from '../assets/colors/colors';

export default function Botao_Numeros_Login(valores) {

    if (valores.tipo == "undo"){
        return (
            <Pressable 
                style = {styles.Btn_numero} 
                onPress = {valores.funcao}>

                <Image
                    style = {styles.image}
                    source = {require("../assets/images/undo.png")}
                />
            </Pressable>
        );
    }   
    else{
        return (
            <View style = {styles.Btn_numero}>

            </View>
                 
        );
    } 

    

}


const styles = StyleSheet.create({

    Btn_numero: {
        height: 70,
        width: 70,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        
    },

});