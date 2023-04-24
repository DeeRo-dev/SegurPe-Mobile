import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthContext, AuthProvider } from './src/contextCrearUsuario/AuthContext';
import { useState, useEffect } from 'react';
import { InicioStackNavigator } from './src/navigator/InicioStackNavigator';
import {  getUserToken } from './src/helpers/store';
import { TOKEN } from './src/helpers/const';
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
  //  const [date, dateAction] =useContext(AuthContext)
   
const [data, setData] = useState(false)


// useEffect(()=>{
//   reloadApp()
// const token = getUserToken(TOKEN)
// console.log('entre>')
//     console.log(token, 'deero')
//     if (token) {
//           setData(false)
//     }
//     else{
//        setData(true)
//        console.log('entre> en el esle')
//     }
//     r
// },[data])
  
  
    
// useEffect(()=>{
//   console.log(AuthContext, 'Auth desde app')
// },[])



// infoToken(TOKEN)



  return (
    // <NavigationContainer>  
      <AppState>   
    
        <Incio/>
      </AppState>
    // </NavigationContainer>
  );
}

