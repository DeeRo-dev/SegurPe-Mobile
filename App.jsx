import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import { SesionStackNavigator } from './src/navigator/SesionStackNavigator';
import { InicioSesion } from './src/screens/InicioSesion/InicioSesion';
import { AuthProvider } from './src/contextCrearUsuario/AuthContext';

const AppState = ({children}) =>{
  return(
    <AuthProvider>
       {children}
    </AuthProvider>
  )
}

export default function App() {
  
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateral/> 
      </AppState>
    </NavigationContainer>
  );
}

