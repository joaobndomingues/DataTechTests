import React from "react";
import {Image, StyleSheet} from "react-native";


export default function Icon_login(comp) {
  
    if (comp.comp == "true"){
        return(
            <Image
                style = {styles.image}
                source = {require('../assets/images/asterisco.png')}
            />
        );
    }
    else{
        return(
            <Image
                style = {styles.image}
                source = {require('../assets/images/bola.png')}
            />
        );
    }
    
}


const styles = StyleSheet.create({

    image: {
        height: 20,
        width: 20,
        marginLeft: 10,
        marginRight: 10,

    },

});