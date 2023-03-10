import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { CrearCuenta } from '../screens/CrearCuenta/CrearCuenta';
import { HomeRegistrarIniciarSesion } from '../screens/HomeRegistrarIniciarSesion/HomeRegistrarIniciarSesion';
import { InicioSesion } from '../screens/InicioSesion/InicioSesion';
import { EditPerfil } from '../screens/Perfil/EditPerfil';

const Stack = createStackNavigator();

export const SesionStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeRegistrarIniciarSesion" options={{title:'Login'}} component={HomeRegistrarIniciarSesion} />
      <Stack.Screen name="InicioSesion" options={{title:'Iniciar Sesion'}} component={InicioSesion} />
      <Stack.Screen name="CrearCuenta" options={{title:'Crear Cuenta'}} component={CrearCuenta} />
      <Stack.Screen name="EditPerfil" options={{title:'Mi Perfil'}} component={EditPerfil} />
    </Stack.Navigator>
  );
}