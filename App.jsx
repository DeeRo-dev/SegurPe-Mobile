import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import { SesionStackNavigator } from './src/navigator/SesionStackNavigator';
import { InicioSesion } from './src/screens/InicioSesion/InicioSesion';


export default function App() {
  return (
    <NavigationContainer>
      <MenuLateral/> 
    </NavigationContainer>
  );
}

