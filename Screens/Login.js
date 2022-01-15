import React from "react";
import {View, Text, StyleSheet, TextInput, Pressable, Image} from "react-native";
import {useState} from 'react';
import cores from '../assets/colors/colors';
import Icon_login from "../Components/Icon_login";
import Botao_Numeros_Login from "../Components/Botao_Numeros_Login";
import Botao_Entrar_Login from "../Components/Botao_Entrar_Login";
import Botao_Registo_Login from "../Components/Botao_Registo_Login";
<<<<<<< HEAD
import Botao_limpar from "../Components/Botao_limpar";

import {} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import 'firebase/firestore' 
import { collection, getDocs, getFirestore, addDoc, where, query } from "firebase/firestore";

import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDNCD7p7yRAkTyE1FYVYtFOgHsoueL25kc",
    authDomain: "datatec-gp.firebaseapp.com",
    projectId: "datatec-gp",
    storageBucket: "datatec-gp.appspot.com",
    messagingSenderId: "931430420066",
    appId: "1:931430420066:web:14229db782f54c9f218b3b",
    measurementId: "G-BL0GLZLS93"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
=======
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383


import Text_Input_Register from "../Components/Text_Input_Register";

const Screen_login = ({navigation}) => {

    const [codigo_1, setCodigo_1] = useState("false");
    const [codigo_2, setCodigo_2] = useState("false");
    const [codigo_3, setCodigo_3] = useState("false");
    const [codigo_4, setCodigo_4] = useState("false");

    const [email, setEmail] = useState("");
    const [codigo, setCodigo] = useState("");
    const [numeros_marcados, setNumeros] = useState(1);

    function codigo_change(){
        if( numeros_marcados == 1){
            setCodigo_1("true");
        }
        else if( numeros_marcados == 2){
            setCodigo_2("true");
        }
        else if( numeros_marcados == 3){
            setCodigo_3("true");
        }
        else if(numeros_marcados == 4){
            setCodigo_4("true");
        }
    }
<<<<<<< HEAD
    function Click_Limpar(e){
        console.log("Botao limpar");
        if( numeros_marcados > 1){
            console.log("Codigo inicial: " + codigo);
            //===================================
            // retirar valor do codigo
            if(codigo.length == 1){
                setCodigo("");
            }
            else{
                setCodigo(codigo.substring(0, codigo.length -1));
            }
            
            //===================================
            // substituir icon codigo
            console.log(numeros_marcados);
            if( numeros_marcados == 2){
                setCodigo_1("false");
            }
            else if( numeros_marcados == 3){
                setCodigo_2("false");
            }
            else if( numeros_marcados == 4){
                setCodigo_3("false");
            }
            else if(numeros_marcados == 5){
                setCodigo_4("false");
            }

            setNumeros( numeros_marcados -1);
            
        }
        

    }
=======
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383

    function Click_1(e) {
        if( numeros_marcados <= 4 ) {
            setCodigo(codigo + "1");
            setNumeros(numeros_marcados + 1);
            codigo_change()
        }
    }
    function Click_2(e) {
        if( numeros_marcados <= 4 ) {
            setCodigo(codigo + "2");
            setNumeros(numeros_marcados + 1);
            codigo_change()
        }
    }
    function Click_3(e) {
        if( numeros_marcados <= 4 ) {
            setCodigo(codigo + "3");
            setNumeros(numeros_marcados + 1);
            codigo_change()
        }
        
    }
    function Click_4(e) {
        if( numeros_marcados <= 4 ) {
            setCodigo(codigo + "4");
            setNumeros(numeros_marcados + 1);
            codigo_change()
        }
        
    }
    function Click_5(e) {
        if( numeros_marcados <= 4 ) {
            setCodigo(codigo + "5");
            setNumeros(numeros_marcados + 1);
            codigo_change()
        }
        
    }
    function Click_6(e) {
        if( numeros_marcados <= 4 ) {
            setCodigo(codigo + "6");
            setNumeros(numeros_marcados + 1);
            codigo_change()
        }
        
    }
    function Click_7(e) {
        if( numeros_marcados <= 4 ) {
            setCodigo(codigo + "7");
            setNumeros(numeros_marcados + 1);
            codigo_change()
        }
        
    }
    function Click_8(e) {
        if( numeros_marcados <= 4 ) {
            setCodigo(codigo + "8");
            setNumeros(numeros_marcados + 1);
            codigo_change()
        }
        
    }
    function Click_9(e) {
        if( numeros_marcados <= 4 ) {
            setCodigo(codigo + "9");
            setNumeros(numeros_marcados + 1);
            codigo_change()
        }
        
    }
    function Click_0(e) {
        if( numeros_marcados <= 4 ) {
            setCodigo(codigo + "0");
            setNumeros(numeros_marcados + 1);
            codigo_change()
        }
    }

    function Click_Entrar() {
        console.log("Clicou Botao Entrar");
        //=======================================
        // Verificar dados
        console.log(email);
        console.log(codigo);

<<<<<<< HEAD
        const q = query(collection(db, "users"), where("email", "==", email));

        getDocs(q).then(querySnapshotEmail =>{
            if(!querySnapshotEmail.empty){
                console.log("Mail existe");
            }
            else{
                alert("Mail nao existe");
                return;
            }

            if(codigo != querySnapshotEmail.docs[0].data().password){
                alert("codigo nao corresponde")
                return;
            }
            else{
                AsyncStorage.setItem(
                    'key',
                    email
                    ).then(() => {
                        navigation.navigate("Main_Screen");
                    }).catch(() => {
                        alert("Error in local storage");
                    });  
            }
        })

=======
        //=======================================
        navigation.navigate("Main_Screen");
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383
    }

    function Click_Registo() {
        console.log("Clicou registe-se");
        navigation.navigate("Register_Screen");
    }

<<<<<<< HEAD
    

=======
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383
    return (
        <View style = {styles.ecra_total}>

            <View style = {styles.container_Email}>

                <Text style = {styles.Email_text}>E-mail/Telemóvel</Text>
                <Text_Input_Register texto = "E-mail/Telemóvel" funcao = {setEmail}/>

            </View>


            <View style = {styles.container_codigo}>
                
                < Icon_login comp = {codigo_1}/>

                < Icon_login comp = {codigo_2} />

                < Icon_login comp = {codigo_3} />

                < Icon_login comp = {codigo_4} />

            </View>

            <View style = {styles.container_botoes_row}>

                < Botao_Numeros_Login texto = {"1"} funcao = {Click_1}  />

                < Botao_Numeros_Login texto = {"2"} funcao = {Click_2}  />

                < Botao_Numeros_Login texto = {"3"} funcao = {Click_3}  />

            </View>

            <View style = {styles.container_botoes_row}>

                < Botao_Numeros_Login texto = {"4"} funcao = {Click_4}  />

                < Botao_Numeros_Login texto = {"5"} funcao = {Click_5}  />

                < Botao_Numeros_Login texto = {"6"} funcao = {Click_6}  />

            </View>

            <View style = {styles.container_botoes_row}>

                < Botao_Numeros_Login texto = {"7"} funcao = {Click_7}  />

                < Botao_Numeros_Login texto = {"8"} funcao = {Click_8}  />

                < Botao_Numeros_Login texto = {"9"} funcao = {Click_9}  />

            </View>

            <View style = {styles.container_botoes_row}>

<<<<<<< HEAD
                < Botao_limpar tipo = {"limpar"} texto = {"0"} funcao = {Click_Limpar} />

                < Botao_Numeros_Login texto = {"0"} funcao = {Click_0}  />

                < Botao_limpar tipo = {"undo"} texto = {"0"} funcao = {Click_Limpar} />

=======
                < Botao_Numeros_Login texto = {"0"} funcao = {Click_0}  />

>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383
            </View>

            <View style = {styles.container_Entrar}>

                < Botao_Entrar_Login texto = {"Entrar"} funcao = {Click_Entrar} />

            </View>

            <View style = {styles.container_Sem_Conta}>
                <Text style = {styles.Texto_Sem_Conta}>
                    Ainda não tem conta? 
                </Text>

                < Botao_Registo_Login texto = {"Registe-se"} funcao = {Click_Registo}/>
            </View>


        </View>

        
    );
};

export default Screen_login;


const styles = StyleSheet.create({

    ecra_total:{
        flex: 1,
        backgroundColor: cores.fundo_ecra,
<<<<<<< HEAD
        alignItems: "center",
=======
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383
    },

    container_Email: {
        marginTop: 60,
        backgroundColor: cores.fundo_ecra,
    },

    Email_text: {
        justifyContent:'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: cores.cria_conta,
        left: 40,
    },

    container_bem_vindo: {
        top: 30,
        backgroundColor: cores.fundo_ecra,
        alignItems:'center',
    },

    text_bem_vindo: {
        justifyContent:'center',
        fontWeight: 'bold',
        fontSize: 26,
        color: "black",
        textAlign: "center",
    },

    container_codigo: {
        marginTop: 50,
        backgroundColor: cores.fundo_ecra,
        flexDirection: 'row',
        alignSelf: "center",
        marginBottom: 40,

    },

    container_botoes_row: {
        marginTop: 20,
        alignSelf: "center",
        backgroundColor: cores.fundo_ecra,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        
    },

    container_Entrar: {
        marginTop: 40,
        backgroundColor: cores.fundo_ecra,
        alignItems: "center",
        justifyContent: 'center',
    },

    container_Sem_Conta: {
        marginTop: 40,
        backgroundColor: cores.fundo_ecra,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
    },

    Texto_Sem_Conta: {
        fontSize: 16,
        fontWeight: 'bold',
        color: cores.cria_conta,
    },
    
});