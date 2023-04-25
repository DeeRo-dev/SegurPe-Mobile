import React,{useContext, useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CrearCuenta } from '../screens/CrearCuenta/CrearCuenta';
import { HomeRegistrarIniciarSesion } from '../screens/HomeRegistrarIniciarSesion/HomeRegistrarIniciarSesion';
import { InicioSesion } from '../screens/InicioSesion/InicioSesion';
import { AuthContext } from '../contextCrearUsuario/AuthContext';
import { LoadingScreen } from '../screens/Loading/LoadingScreen';
import {  HomeOnboarding } from '../screens/InicioDeApp/Home';
import { getUserToken } from '../helpers/store';
import { TOKEN } from '../helpers/const';


const Stack = createStackNavigator();


export const InicioStackNavigator = () => {

// const tokenUser = getUserToken(TOKEN)
// if (tokenUser.token) {
//   console.log('es un string')
// }
// console.log(tokenUser)
const [date, dateAction]= useContext(AuthContext) 

// Pagina de carga
 if (date.status === 'checking') {
   return <LoadingScreen/>
 }
 console.log(date, 'estate')
  return (
    <Stack.Navigator 
      initialRouteName='HomeOnboarding'
      options={{
        headerStyle:{
          backgroundColor:'#16253A',
        }
      }}
    >
       <Stack.Screen name="HomeOnboarding"  options={{
          title:'Login',
         headerShown:false
        }}component={HomeOnboarding} /> 
      <Stack.Screen name="HomeRegistrarIniciarSesion" 
      options={{
          title:'Login',
         headerShown:false
        }} 
      component={HomeRegistrarIniciarSesion} />
      <Stack.Screen name="InicioSesion" options={{title:'Iniciar Sesion'}} component={InicioSesion} />
      <Stack.Screen name="CrearCuenta" options={{title:'Crear Cuenta'}} component={CrearCuenta} />
      
    
    </Stack.Navigator>
   
  );
}