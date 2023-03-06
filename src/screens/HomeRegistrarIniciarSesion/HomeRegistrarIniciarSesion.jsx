import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View,Image, Text } from 'react-native';
import {styles} from './ThemeHomeRegistrarIniciarSesion'
export const HomeRegistrarIniciarSesion = () => {
  return (
    <View style={styles.content}>
       <Image style={styles.imgSegur} source={require('../../assets/SegurPe.png')}/>
       <View style={styles.contentBtns}>
          <Text style={styles.title}>No tienes una cuenta</Text>
          <TouchableOpacity style={styles.btnLog}>
              <Text style={styles.textBtn}>Crear una cuenta</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Ya tienes una cuenta</Text>
          <TouchableOpacity style={styles.btnLog}>
              <Text style={styles.textBtn}>Iniciar sesion</Text>
          </TouchableOpacity>
          
       </View>
       <TouchableOpacity style={styles.btnLogGoogle}>
              <Text style={styles.textBtnGoogle}>Ingresar con Google</Text>
          </TouchableOpacity>
    </View>
  )
}
