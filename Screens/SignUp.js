<<<<<<< HEAD
import React from "react";
import {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from "react-native";
import cores from '../assets/colors/colors';

import Text_Input_Register from "../Components/Text_Input_Register";
import Botao_Registo_Login from "../Components/Botao_Registo_Login";

import {} from "firebase/firestore";
import { collection, getDocs, getFirestore, addDoc, where, query } from "firebase/firestore";

import AsyncStorage from '@react-native-async-storage/async-storage';

import {initializeApp} from "firebase/app";

//import 'firebase/firestore';

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

const SignUp_screen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [pin, setPin] = useState("");
    const [pin_confirmacao, setPin_2] = useState("");



    function Registo(){

        let help = 1;

        function setHelp(){
            help = 0;
            console.log("TOMA")
        }

        console.log("Email: " + email);
        console.log("Pin: " + pin);
        console.log("Pin 1: " + pin_confirmacao);
        //==============================================
        // guardar valores na base de dados
        const q = query(collection(db, "users"), where("email", "==", email));

        getDocs(q).then(querySnapshotEmail =>{
            if(!querySnapshotEmail.empty){
                console.log(querySnapshotEmail.docs[0].data().password)
                console.log("JA EXISTE ESTE EMAIL");
                alert("JA EXISTE ESTE EMAIL");
                help = 0;
            }
            else{
                console.log("mail ainda nao existe!");
            }

            console.log(help)
            if(help == 0){
                return;
            }
            console.log("HELP ERA 1");

            if(pin != pin_confirmacao){
                console.log("Pin nao coincide");
                alert("Pin nao coincide");
                help = 0;
                return;
            }

            if(pin.length != 4){
                alert("Pin tem de ter exatamente 4 numeros");
                help = 0;
                return;
            }

            console.log(help);

            //ha uma forma melhor de fazer isto mas ainda a tou a descobrir
            if(help == 1){
                const docRef = addDoc(collection(db, "users"), {
                    email: email,
                    password: pin
                }).then((docRef) =>{
                    console.log("GUARDADO");
                    
                    AsyncStorage.setItem(
                            'key',
                            email
                            ).then(() => {
                                navigation.navigate("Main_Screen");
                            }).catch(() => {
                                alert("Error in local storage");
                            });

                }).catch((e) => {
                    console.error("Error adding document: ", e);
                    return;
                });
            }
        });
    }

    function Click_Login() {
        console.log("Clicou login");
        navigation.navigate("Login_Screen");
    }

    return (
        <View style = {styles.ecra_total}>

        
            <View style = {styles.container_cria_conta}>
                <Text style= {styles.Texto_cria_conta}>
                    Crie a sua conta
                </Text>
            </View>

            <View style = {styles.container_Email}>

                <Text style = {styles.Email_text}>E-mail/Telemóvel</Text>

                < Text_Input_Register texto = "E-mail/Telemóvel" funcao = {setEmail}/>

            </View>

            <View style = {styles.container_PIN}>

                <Text style = {styles.Email_text}>PIN</Text>

                < Text_Input_Register texto = "PIN" funcao = {setPin}/>

            </View>

            <View style = {styles.container_PIN}>

                <Text style = {styles.Email_text}>Confirme PIN</Text>

                < Text_Input_Register texto = "PIN" funcao = {setPin_2}/>

            </View>
                
            <View style = {styles.container_Button}>
                <Pressable 
                    style = {styles.Button} 
                    onPress={Registo} >
                    <Text style = {styles.Text_Button}>
                        Registe-se
                    </Text>
                </Pressable>
            </View>

            <View style = {styles.container_Sem_Conta}>
                <Text style = {styles.Texto_Sem_Conta}>
                    Já tem conta? 
                </Text>

                < Botao_Registo_Login texto = {"Entre"} funcao = {Click_Login}/>
            </View>

            

        </View>

        
    );
};

export default SignUp_screen;






const styles = StyleSheet.create({

    ecra_total:{
        flex: 1,
        backgroundColor: cores.fundo_ecra,
        alignItems: "center",
    },

    container_cria_conta: {
        top: 70,
        backgroundColor: cores.fundo_ecra,
        alignItems:'center',
    },

    Texto_cria_conta: {
        justifyContent:'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: cores.botoes,
    },

    container_Email: {
        marginTop: 130,
        backgroundColor: cores.fundo_ecra,
    },

    Email_text: {
        justifyContent:'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: cores.cria_conta,
        left: 40,
    },

    container_PIN: {
        marginTop: 35,
        backgroundColor: cores.fundo_ecra,
    },

    container_Button: {
        alignItems:'center',
        marginTop: 70,
        backgroundColor: cores.fundo_ecra,
        justifyContent: 'center',
    },

    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: cores.botoes,
        height: 50,
        width: 300,
        borderRadius: 10,
    },

    Text_Button: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
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
    
=======
import React from "react";
import {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from "react-native";
import cores from '../assets/colors/colors';

import Text_Input_Register from "../Components/Text_Input_Register";
import Botao_Registo_Login from "../Components/Botao_Registo_Login";


const SignUp_screen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [pin, setPin] = useState("");
    const [pin_confirmacao, setPin_2] = useState("");

    function Registo(){
        console.log("Email: " + email);
        console.log("Pin: " + pin);
        console.log("Pin 1: " + pin_confirmacao);
        //==============================================
        // guardar valores na base de dados


        //==============================================
        navigation.navigate("Main_Screen");
    }

    function Click_Login() {
        console.log("Clicou login");
        navigation.navigate("Login_Screen");
    }

    return (
        <View style = {styles.ecra_total}>

        
            <View style = {styles.container_cria_conta}>
                <Text style= {styles.Texto_cria_conta}>
                    Crie a sua conta
                </Text>
            </View>

            <View style = {styles.container_Email}>

                <Text style = {styles.Email_text}>E-mail/Telemóvel</Text>

                < Text_Input_Register texto = "E-mail/Telemóvel" funcao = {setEmail}/>

            </View>

            <View style = {styles.container_PIN}>

                <Text style = {styles.Email_text}>PIN</Text>

                < Text_Input_Register texto = "PIN" funcao = {setPin}/>

            </View>

            <View style = {styles.container_PIN}>

                <Text style = {styles.Email_text}>Confirme PIN</Text>

                < Text_Input_Register texto = "PIN" funcao = {setPin_2}/>

            </View>
                
            <View style = {styles.container_Button}>
                <Pressable 
                    style = {styles.Button} 
                    onPress={Registo} >
                    <Text style = {styles.Text_Button}>
                        Registe-se
                    </Text>
                </Pressable>
            </View>

            <View style = {styles.container_Sem_Conta}>
                <Text style = {styles.Texto_Sem_Conta}>
                    Já tem conta? 
                </Text>

                < Botao_Registo_Login texto = {"Entre"} funcao = {Click_Login}/>
            </View>

            

        </View>

        
    );
};

export default SignUp_screen;






const styles = StyleSheet.create({

    ecra_total:{
        flex: 1,
        backgroundColor: cores.fundo_ecra,
    },

    container_cria_conta: {
        top: 70,
        backgroundColor: cores.fundo_ecra,
        alignItems:'center',
    },

    Texto_cria_conta: {
        justifyContent:'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: cores.botoes,
    },

    container_Email: {
        marginTop: 130,
        backgroundColor: cores.fundo_ecra,
    },

    Email_text: {
        justifyContent:'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: cores.cria_conta,
        left: 40,
    },

    container_PIN: {
        marginTop: 35,
        backgroundColor: cores.fundo_ecra,
    },

    container_Button: {
        alignItems:'center',
        marginTop: 70,
        backgroundColor: cores.fundo_ecra,
        justifyContent: 'center',
    },

    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: cores.botoes,
        height: 50,
        width: 300,
        borderRadius: 10,
    },

    Text_Button: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
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
    
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383
});