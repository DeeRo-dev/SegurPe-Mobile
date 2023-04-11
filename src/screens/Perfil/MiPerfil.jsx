import React,{ useState,useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as  ImagePicker from 'expo-image-picker'
import {styles} from './ThemeMiPerfil'
import { Image,TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { getUserInfo } from '../../helpers/store';
import {USER, TOKEN} from '../../helpers/const'


export const MiPerfil = () => {



  const navigator = useNavigation();
  const [data, setData] = useState({})
  const tokenSeg="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiMzYiLCJlbWFpbCI6IkhkaGRAamZqZC5jb20iLCJETkkiOiIxMjM0NTY3OCIsIm1heGNhbGxzIjoyLCJ0eXBlVXNlciI6IjEifSwiaWF0IjoxNjgxMjQwNDIyLCJleHAiOjE2ODM4MzI0MjJ9.h_v44Q7Eey1IYbjCxjYTpoGrPA1V5Xj7_w9hYvFWIkM"
    const traerData = async (name)=>{
      setData(
        await getUserInfo(name)
     )
    }

    traerData(USER)
    // console.log(data,'perfillll')

  // Libreria para cargar la image
const loadImageFromGallery = async(array) =>{
  const response = {status:false, image:null}
  const resultPermissions = await MediaLibrary.requestPermissionsAsync();

  if (resultPermissions.status === "denied") {
    Alert.alert("Debes darle permiso a la app para acceder a la galeria")
    return response
  }
  const result = await  ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: array
  })
  if (result.canceled) {
    return response
  }
  response.status = true
  response.image = result.uri
  return response
}
const cargarFoto = async() =>{
  const result = await loadImageFromGallery([1,1])
  console.log(result)
  // FUNCION PARA CARGAR LA IMAGEN DEL AVATAR
}
  
  return (


    <View>

      {/* Avatar content */}
        <View style={styles.contNameAvatar}>
          <View style={styles.contentAvatar}>
              <Image source={{uri:"https://static.dw.com/image/64142948_303.jpg"}}
                style={styles.avatarPerfil} />
                 <Ionicons style={styles.pencilAvatar} name="pencil-outline" size={20} color='black' onPress={cargarFoto}/>
         </View>
         <Text  style={styles.titleName}> {data.names} {data.lastnames}</Text>
        </View>


      {/* Contenidos de los inputs */}
     <View style={styles.contentDatos}>
         <Text style={styles.titleDato} >Numero de telefono</Text>
        <View style={styles.datos}>
          <Ionicons name="call-outline" size={20} color='black' />   
          <Text style={styles.dato}>
          {data.phone}
          </Text>
          <TouchableOpacity onPress={() => {navigator.navigate('EditeTelefono')}}>
            <Ionicons name="pencil-outline" size={20} color='black' />
          </TouchableOpacity>
          
        </View>    
        <Text style={styles.titleDato}>Correo electronico  </Text>
        <View style={styles.datos}>
          <Ionicons name="mail-outline" size={20} color='black' />
          <Text style={styles.dato}>
          {data.email}
          </Text>
          <TouchableOpacity onPress={() => {navigator.navigate('EditeMail')}}>
            <Ionicons name="pencil-outline" size={20} color='black' />
          </TouchableOpacity>
          
        </View>

        <Text style={styles.titleDato}>  Direccion</Text>
        <View style={styles.datos}>
          <Ionicons name="location-outline" size={20} color='black' />
          <Text style={styles.dato}>
          {data.address}
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
