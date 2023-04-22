import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import { SesionStackNavigator } from './src/navigator/SesionStackNavigator';
import { InicioSesion } from './src/screens/InicioSesion/InicioSesion';
import { AuthContext, AuthProvider } from './src/contextCrearUsuario/AuthContext';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { InicioStackNavigator } from './src/navigator/InicioStackNavigator';
import { getUserInfo, getUserToken } from './src/helpers/store';
import { TOKEN } from './src/helpers/const';

useEffect
const AppState = ({children}) =>{
  return(
    <AuthProvider>
       {children}
    </AuthProvider>
  )
}

export default function App() {
  // const [date, dateAction] =useContext(AuthContext)
   
const [data, setData] = useState(false)

  const infoToken = async(name) =>{
    const token = await getUserToken(name)
    console.log(token, 'entdr')
    if (token) {
          setData(true)
        console.log('entru rtere')

    }
    else{
       setData(false)
      console.log('false')

    }
  }
    
  
console.log(data, 'dsd')

useEffect(()=>{
  infoToken(TOKEN)
},[data])
console.log(getUserToken(TOKEN),'dfg')

  return (
    <NavigationContainer>  
      <AppState>   
       {/* <AppState>   
          <MenuLateral/>         
       </AppState>  */}
       {
        !data || data === 'undefined' ? (
      
            <InicioStackNavigator/>
        )
        : ( 
            <MenuLateral/>         
        )
       }
          </AppState>
    </NavigationContainer>
  );
}

