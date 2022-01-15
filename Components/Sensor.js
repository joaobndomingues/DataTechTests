import React from "react";
import {Pressable, StyleSheet, Text, Image, View} from "react-native";
import cores from '../assets/colors/colors';

export default function Sensor(valores) {

    if(valores.ativo == "on"){

        return (
            <View style = {styles.container_sensor_green}>
                <Text style = {styles.texto_ligado}>
                    LIGADO
                </Text>
                <Image
                    style = {styles.image_green}
                    source = {require('../assets/images/sensor_green.png')}
                />
            </View>
        );
    }
    else{

        return (
            <View style = {styles.container_sensor_red}>
                <Text style = {styles.texto_desligado}>
                    DESLIGADO
                </Text>
                <Image
                    style = {styles.image_red}
                    source = {require('../assets/images/sensor_red.png')}
                />
            </View>
        );
    }

}


const styles = StyleSheet.create({

    container_sensor_green: {
        marginTop: -50,
        marginLeft: 150,
        height: 60,
        width: 300,
    },

    container_sensor_red: {
        marginTop: -50,
        marginLeft: 120,
        height: 60,
        width: 300,
    },

    texto_ligado: {
        marginLeft: 70,
        marginTop: - 12,
        fontSize: 25,
        color: cores.cor_on,
        padding: 15,
        fontWeight: "bold",

    },

    texto_desligado: {
        marginLeft: 70,
        marginTop: - 12,
        fontSize: 25,
        color: cores.cor_off,
        padding: 15,
        fontWeight: "bold",

    },

    image_green: {
        height: 27,
        width: 27,
        marginLeft: 190,
        marginTop: -45,

    },

    image_red: {
        height: 27,
        width: 27,
        marginLeft: 230,
        marginTop: -45,

    },


});