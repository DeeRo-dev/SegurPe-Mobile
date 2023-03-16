import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { CrearCuenta } from '../screens/CrearCuenta/CrearCuenta';
import { HomeRegistrarIniciarSesion } from '../screens/HomeRegistrarIniciarSesion/HomeRegistrarIniciarSesion';
import { InicioSesion } from '../screens/InicioSesion/InicioSesion';
import { EditeTelefono } from '../screens/Perfil/EditeTelefono';
import { EditeMail } from '../screens/Perfil/EditeMail';
import { EditeDireccion } from '../screens/Perfil/EditeDireccion';
import { EditeContrasenia } from '../screens/Perfil/EditeContrasenia';


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
      <Stack.Screen name="EditeTelefono" options={{title:'Edición '}} component={EditeTelefono} />
      <Stack.Screen name="EditeMail" options={{title:'Edición'}} component={EditeMail} />
      <Stack.Screen name="EditeDireccion" options={{title:'Edición '}} component={EditeDireccion} />
      <Stack.Screen name="EditeContrasenia" options={{title:'Edición '}} component={EditeContrasenia} />
    </Stack.Navigator>
  );
}