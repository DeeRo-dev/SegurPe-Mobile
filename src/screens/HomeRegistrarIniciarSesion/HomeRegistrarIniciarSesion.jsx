import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View,Image, Text } from 'react-native';
import {styles} from './ThemeHomeRegistrarIniciarSesion';

import { useNavigation } from '@react-navigation/native';

export const HomeRegistrarIniciarSesion = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.content}>
      
      <View style={styles.contentImg}>
         <Image style={styles.imgSegur} source={require('../../assets/SegurPe.png')}/>
      </View>
      
       <View style={styles.contentBtns}>
          {/* <Text style={styles.title}>No tienes una cuenta</Text>
          <TouchableOpacity onPress={() => {navigator.navigate('CrearCuenta')}} style={styles.btnLog}>
              <Text style={styles.textBtn}>Crear una cuenta</Text>
          </TouchableOpacity> */}
          <Text style={styles.title}>Accede a tu cuenta</Text>
          <TouchableOpacity  onPress={() => {navigator.navigate('InicioSesion')}} style={styles.btnLog}>
              <Text style={styles.textBtn}>Iniciar sesion</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Inicia sesión con Google</Text>
         <TouchableOpacity style={styles.btnLogGoogle}>
              <Image source={require('../../assets/icon.png')}/>
              <Text style={styles.textBtnGoogle}>Ingresar con Google</Text>
          </TouchableOpacity>
       </View>
    
    </View>
  )
}
export const AppState = ({children}) => {
  return(
    <UsuarioProvider>
      {children}
    </UsuarioProvider>
  )
}