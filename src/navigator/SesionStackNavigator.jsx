import React,{useEffect, useState} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { CrearCuenta } from '../screens/CrearCuenta/CrearCuenta';
import { HomeRegistrarIniciarSesion } from '../screens/HomeRegistrarIniciarSesion/HomeRegistrarIniciarSesion';
import { InicioSesion } from '../screens/InicioSesion/InicioSesion';
import { EditeTelefono } from '../screens/Perfil/EditeTelefono';
import { EditeMail } from '../screens/Perfil/EditeMail';
import { EditeDireccion } from '../screens/Perfil/EditeDireccion';
import { EditeContrasenia } from '../screens/Perfil/EditeContrasenia';
import { Map } from '../screens/Map/Map';
import { TOKEN } from '../helpers/const';
import { getUserToken } from '../helpers/store';


const Stack = createStackNavigator();




export const SesionStackNavigator = () => {


const [loggedIn, setLoggedIn] = useState(false);

// Función para verificar si el usuario está autenticado
const isAuthenticated =  async (name) => {
  // Comprobar si existe un token de autenticación válido
 
 try {const authToken =  await getUserToken(name)  
   console.log(authToken, ' token')
    console.log(authToken,'sdsd')
   if (authToken) {
     setLoggedIn(!!authToken);
  }else{
    setLoggedIn(false)
   }
 } catch (error) {
   console.log(error)
}

}
console.log(loggedIn, 'estate')

 isAuthenticated(TOKEN) 


  return (
    <Stack.Navigator 
      initialRouteName='HomeRegistrarIniciarSesion'
      options={{
        headerStyle:{
          backgroundColor:'#16253A',
        }
      }}
    >
   { !loggedIn ? (
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
      ) : (
     <>
      <Stack.Screen
        options={{
          title:'Map',
          headerStyle:{
            backgroundColor:'#16253A',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle:{
            color: 'white',
            justifyContent:'center'
          },
        }}
        name="Map"  component={Map} />
      <Stack.Screen 
        options={{
          title:'Edición', 
          headerStyle:{
            backgroundColor:'#16253A',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle:{
            color: 'white',
            justifyContent:'center'
          },
        }}
        name="EditeTelefono" 
        component={EditeTelefono} />
      <Stack.Screen 
        options={{
          title:'Edición',
          headerStyle:{
            backgroundColor:'#16253A',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle:{
            color: 'white',
            justifyContent:'center'
          },
        }}
        name="EditeMail" component={EditeMail} />
      <Stack.Screen 
        options={{
          title:'Edición',
          headerStyle:{
            backgroundColor:'#16253A',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle:{
            color: 'white',
            justifyContent:'center'
          },
          }}
          name="EditeDireccion" component={EditeDireccion} />
      <Stack.Screen
        options={{
          title:'Edición',
          headerStyle:{
            backgroundColor:'#16253A',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle:{
            color: 'white',
            justifyContent:'center'
          },
        }}
        name="EditeContrasenia"  component={EditeContrasenia} />
         
        </>
        )}
    </Stack.Navigator>
   
  );
}