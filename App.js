
import React from 'react';
import SignUp_screen from './Screens/SignUp';
import Screen_login from './Screens/Login';
import Dicas_Screen from './Screens/Dicas';
import Main_Screen from './Screens/Main';

<<<<<<< HEAD
import {initializeApp} from "firebase/app";
import 'firebase/firestore' 
import { collection, getDocs, getFirestore } from "firebase/firestore";

=======
>>>>>>> 4480eda0772e64ef04174da684124cb2b2767383
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Login_Screen"
          component = {Screen_login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name = "Register_Screen" component = {SignUp_screen} options={{ headerShown: false }}/>
        <Stack.Screen name = "Dicas_Screen" component = {Dicas_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name = "Main_Screen" component = {Main_Screen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;