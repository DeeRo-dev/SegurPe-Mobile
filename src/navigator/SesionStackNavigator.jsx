import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { CrearCuenta } from '../screens/CrearCuenta/CrearCuenta';
import { HomeRegistrarIniciarSesion } from '../screens/HomeRegistrarIniciarSesion/HomeRegistrarIniciarSesion';
import { InicioSesion } from '../screens/InicioSesion/InicioSesion';

const Stack = createStackNavigator();

export const SesionStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeRegistrarIniciarSesion" options={{title:'Login'}} component={HomeRegistrarIniciarSesion} />
      <Stack.Screen name="InicioSesion" component={InicioSesion} />
      <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
    </Stack.Navigator>
  );
}