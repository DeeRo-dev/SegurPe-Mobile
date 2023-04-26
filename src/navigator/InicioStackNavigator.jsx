import React,{useContext, useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CrearCuenta } from '../screens/CrearCuenta/CrearCuenta';
import { HomeRegistrarIniciarSesion } from '../screens/HomeRegistrarIniciarSesion/HomeRegistrarIniciarSesion';
import { InicioSesion } from '../screens/InicioSesion/InicioSesion';
import { AuthContext } from '../contextCrearUsuario/AuthContext';
import { LoadingScreen } from '../screens/Loading/LoadingScreen';
import {  HomeOnboarding } from '../screens/InicioDeApp/Home';
import { getIsBoarding, getUserToken } from '../helpers/store';
import { ISBOARDING, TOKEN } from '../helpers/const';


const Stack = createStackNavigator();


export const InicioStackNavigator = () => {
const [date, dateAction]= useContext(AuthContext) 
  // State para saber si hay que mostrar el loading y esperar que recupere los datos del storage
const [value, setValue] = useState({
  isBoarding:false,
  loading:true,
})

const onBoard = async ()=> {
  const data = await getIsBoarding(ISBOARDING)
  if (data === true && value.isBoarding === false) {
    setValue({
      ...value,
      isBoarding: true,
      loading:false
    })
   }
}

onBoard()
// Loading para esperar los datos
useEffect(() => {
  const timeoutId = setTimeout(() => {
    setValue({
      ...value,
      loading:false
    })
  }, 3000);

  return () => {
    clearTimeout(timeoutId);
  };
}, []);


// Pagina de carga
 if (date.status === 'checking' || value.loading === true) {
   return <LoadingScreen/>
 }

  return (
    <Stack.Navigator 
       initialRouteName={ value.isBoarding === true ? "HomeRegistrarIniciarSesion"  : 'HomeOnboarding'}
      options={{
        headerStyle:{
          backgroundColor:'#16253A',
        }
      }}
    >
       {
         value.isBoarding === false &&
         <Stack.Screen name="HomeOnboarding"  options={{
          title:'Login',
         headerShown:false
        }}component={HomeOnboarding} /> 
       }
       
     
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