import React from 'react';
import {styles} from './ThemeMiPerfil'
import { Image,TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
export const EditPerfil = () => {
  const navigator = useNavigation();
  return (
    <View>
        <View style={styles.contImgAvatar}>
          <View style={styles.contentAvatar}>
              <Image source={{uri:"https://static.dw.com/image/64142948_303.jpg"}}
                style={styles.avatarPerfil} />
         </View>
        </View>
     <View style={styles.contentDatos}>
        <View style={styles.datosEdit}>
          
          <Text >
            Nombre completo
          </Text>
          
          <TextInput style={styles.dato} placeholder='Leonel Andres Messi'/>
          
        </View>
        <View style={styles.datosEdit}>
          <Text style={styles.titleDato}>
            Correo electronico  
          </Text>
          <TextInput style={styles.dato} placeholder='lapulga@messi.com'/>
        </View>
        <View style={styles.datosEdit}>
          <Text style={styles.titleDato}>
            Direccion
          </Text>
          
          <TextInput style={styles.dato} placeholder='A la vuelta de la torre efield 323'/>
        </View>
    </View>
    <View style={styles.contentBtnEcho}>
      <TouchableOpacity  onPress={() => {navigator.navigate('MiPerfil')}} style={styles.btnEcho}>
       
        <Text style={styles.textBtnEcho}>
        <Ionicons name="pencil-outline" size={15} color='white' /> Editar cuenta
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}
