import 'react-native-gesture-handler';
import * as React from 'react';
import {  AuthProvider } from './src/contextCrearUsuario/AuthContext';
import { useState, useEffect } from 'react';

import Incio from './src/screens/InicioDeApp/Inicio';



useEffect
const AppState = ({children}) =>{
  return(
    <AuthProvider>
       {children}
    </AuthProvider>
  )
}

export default function App() {
 
const [data, setData] = useState(false)


  return (
      <AppState>   
        <Incio/>
      </AppState>
  );
}

