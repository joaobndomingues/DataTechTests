import React from "react";
import {Image, StyleSheet} from "react-native";


export default function Icon_login(comp) {
<<<<<<< HEAD
  
=======
    
    const asterisco = '../assets/images/asterisco.png';
    const bola = '../assets/images/bola.png';
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383
    if (comp.comp == "true"){
        return(
            <Image
                style = {styles.image}
<<<<<<< HEAD
                source = {require('../assets/images/asterisco.png')}
=======
                source = {require(asterisco)}
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383
            />
        );
    }
    else{
        return(
            <Image
                style = {styles.image}
<<<<<<< HEAD
                source = {require('../assets/images/bola.png')}
=======
                source = {require(bola)}
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383
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