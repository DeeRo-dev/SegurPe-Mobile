import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import { SesionStackNavigator } from './src/navigator/SesionStackNavigator';
import { InicioSesion } from './src/screens/InicioSesion/InicioSesion';
import { AuthContext, AuthProvider } from './src/contextCrearUsuario/AuthContext';
import { useContext } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { InicioStackNavigator } from './src/navigator/InicioStackNavigator';

const AppState = ({children}) =>{
  return(
    <AuthProvider>
       {children}
    </AuthProvider>
  )
}

export default function App() {
  // const [date, dateAction] =useContext(AuthContext)
const [data, setData] = useState(true)
  return (
    <NavigationContainer>
       {/* <AppState>   
          <MenuLateral/>         
       </AppState>  */}
       {
        data === true ? (
          <AppState>   
            <InicioStackNavigator/>
          </AppState>
        )
        : ( 
          <AppState>   
            <MenuLateral/>         
          </AppState>
                
        )
       }
    </NavigationContainer>
  );
}

