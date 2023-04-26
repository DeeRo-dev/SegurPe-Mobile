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

const [value, setValue] = useState(false)
const [date, dateAction]= useContext(AuthContext) 

const onBoard = async ()=> {
  const data = await getIsBoarding(ISBOARDING)
 
  if (data === true && value === false) {
    setValue(true)
  }
}

onBoard()

// Pagina de carga
 if (date.status === 'checking') {
   return <LoadingScreen/>
 }

  return (
    <Stack.Navigator 
       initialRouteName={ value === true ? "HomeRegistrarIniciarSesion"  : 'HomeOnboarding'}
      options={{
        headerStyle:{
          backgroundColor:'#16253A',
        }
      }}
    >
       {/* {value === false ?  (
       <>
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
       </>
       ):(
       <>
    
      <Stack.Screen name="HomeRegistrarIniciarSesion" 
      options={{
          title:'Login',
         headerShown:false
        }} 
      component={HomeRegistrarIniciarSesion} />
      <Stack.Screen name="InicioSesion" options={{title:'Iniciar Sesion'}} component={InicioSesion} />
      <Stack.Screen name="CrearCuenta" options={{title:'Crear Cuenta'}} component={CrearCuenta} />
       </>
       ) 
        */}
       
    
     
{/*        
     
    <Stack.Screen name="HomeRegistrarIniciarSesion" 
    options={{
        title:'Login',
       headerShown:false
      }} 
    component={HomeRegistrarIniciarSesion} />
    <Stack.Screen name="InicioSesion" options={{title:'Iniciar Sesion'}} component={InicioSesion} />
    <Stack.Screen name="CrearCuenta" options={{title:'Crear Cuenta'}} component={CrearCuenta} />
      
     */
     
     !value &&
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