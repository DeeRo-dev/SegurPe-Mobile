import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { CrearCuenta } from '../screens/CrearCuenta/CrearCuenta';
import { HomeRegistrarIniciarSesion } from '../screens/HomeRegistrarIniciarSesion/HomeRegistrarIniciarSesion';
import { InicioSesion } from '../screens/InicioSesion/InicioSesion';
import { EditeTelefono } from '../screens/Perfil/EditeTelefono';


const Stack = createStackNavigator();

export const SesionStackNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName='HomeRegistrarIniciarSesion'
     
    >
      <Stack.Screen name="HomeRegistrarIniciarSesion" 
      options={{
          title:'Login',
         headerShown:false
        }} 
      component={HomeRegistrarIniciarSesion} />
      <Stack.Screen name="InicioSesion" options={{title:'Iniciar Sesion'}} component={InicioSesion} />
      <Stack.Screen name="CrearCuenta" options={{title:'Crear Cuenta'}} component={CrearCuenta} />
      <Stack.Screen name="EditeTelefono" options={{title:'Edicion'}} component={EditeTelefono} />
    </Stack.Navigator>
  );
}