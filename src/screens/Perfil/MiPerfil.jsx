import React from 'react';
import {styles} from './ThemeMiPerfil'
import { Image,TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

export const MiPerfil = () => {
  const navigator = useNavigation();
  return (


    <View>

      {/* Avatar content */}
        <View style={styles.contNameAvatar}>
          <View style={styles.contentAvatar}>
              <Image source={{uri:"https://static.dw.com/image/64142948_303.jpg"}}
                style={styles.avatarPerfil} />
                 <Ionicons style={styles.pencilAvatar} name="pencil-outline" size={20} color='black' />
         </View>
         <Text  style={styles.titleName}> Leonel Andres Messi</Text>
        </View>


      {/* Contenidos de los inputs */}
     <View style={styles.contentDatos}>
         <Text style={styles.titleDato} >Numero de telefono</Text>
        <View style={styles.datos}>
          <Ionicons name="call-outline" size={20} color='black' />   
          <Text style={styles.dato}>
           6556+596+5495
          </Text>
          <TouchableOpacity onPress={() => {navigator.navigate('EditeTelefono')}}>
            <Ionicons name="pencil-outline" size={20} color='black' />
          </TouchableOpacity>
          
        </View>    
        <Text style={styles.titleDato}>Correo electronico  </Text>
        <View style={styles.datos}>
          <Ionicons name="mail-outline" size={20} color='black' />
          <Text style={styles.dato}>
           Leonel-Andres-Mess@gmialca.com
          </Text>
          <TouchableOpacity onPress={() => {navigator.navigate('EditeMail')}}>
            <Ionicons name="pencil-outline" size={20} color='black' />
          </TouchableOpacity>
          
        </View>

        <Text style={styles.titleDato}>  Direccion</Text>
        <View style={styles.datos}>
          <Ionicons name="location-outline" size={20} color='black' />
          <Text style={styles.dato}>
          Argentina tierra del MATE Y el Fernet
          </Text>

          <TouchableOpacity onPress={() => {navigator.navigate('EditeDireccion')}}>
            <Ionicons name="pencil-outline" size={20} color='black' />
          </TouchableOpacity>
          
        </View>
        
        <Text style={styles.titleDato}> Contrasenia</Text>
        <View style={styles.datos}>
          <Ionicons name="lock-closed-outline" size={20} color='black' />
          <Text style={styles.dato}>
           ***********
          </Text>
          <TouchableOpacity onPress={() => {navigator.navigate('EditeContrasenia')}}>
             <Ionicons name="pencil-outline" size={20} color='black' />
          </TouchableOpacity>
         
        </View>
    </View>
    <View style={styles.contentBtnEcho}>



      {/* <TouchableOpacity  onPress={() => {navigator.navigate('MiPerfil')}} style={styles.btnEcho}>
       
        <Text style={styles.textBtnEcho}>
       Editar cuenta
        </Text>
      </TouchableOpacity> */}
    </View>
    </View>
  )
}
