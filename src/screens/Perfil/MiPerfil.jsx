import React,{ useState,useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as  ImagePicker from 'expo-image-picker'
import {styles} from './ThemeMiPerfil'
import { Image,TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { getUserInfo, getUserToken } from '../../helpers/store';
import {USER, TOKEN} from '../../helpers/const'
import { performRequest } from '../../helpers/api';


export const MiPerfil = () => {

  const navigator = useNavigation();
  const [data, setData] = useState({})
  const [img, setImg] = useState('')
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
  const objImage = { 
    uri: result.image,
     name: 'image.jpg',
      type: 'image/jpeg' }

  // FUNCION PARA CARGAR LA IMAGEN DEL AVATAR
    if (result.image) {
      // console.log(TOKEN, 'PUT', 'UploadUserImage', objImage)
       getUser(TOKEN, 'PUT', 'UploadUserImage', objImage)
    }
  return
}
  
//  console.log(data)

// FUNCION PARA TRAER INFO DEL USER
const getUser = async (name, method, route, image = null)=>{
    // Obtiene un token de usuario del almacenamiento seguro.
    const tokenSeg = await getUserToken(name)
    //  TRAER INFO DEL USUARIO
       if (tokenSeg) {
          const respon = await sendDataUser(tokenSeg, method, route, image )
          // console.log(respon, 'se dio')
       }
       return
 }
 
 useEffect(() => {
  getUser(TOKEN, 'GET', 'getUserProfileInfo')
  ,[]
 }
)
// FUNCION PARA REALIZAR EL GET - PUT USER
const sendDataUser = async (token, method, route, image = null) => {
  const headerList = {
    "Authorization" : 'Bearer ' + token
  }
  if (method == 'PUT') {
      console.log(method, route ,null , headerList, image, 'DESDEEE')
  }
 
  try {
    const response = await performRequest(method, route ,null , headerList, image)
    setData(response.data)
    if (response.data.imgProfile) {
      setImg(response.data.imgProfile)
    }
    
    return;
  } catch (error) { 
       console.log(error, ' entro en el error del senddata')
       alert('Ocurrió un error: ' + error);
       return error
  }
}
//  console.log(img)

  return (


    <View>

      {/* Avatar content */}
        <View style={styles.contNameAvatar}>
          <View style={styles.contentAvatar}>
              {/* {img
               ? <Image source={{uri : img}}
               style={styles.avatarPerfil} />
               :<Image source={{uri:"https://bysperfeccionoral.com/wp-content/uploads/2020/01/136-1366211_group-of-10-guys-login-user-icon-png.jpg"}}
                style={styles.avatarPerfil} />
              } */}
              <Image source={{uri: img ? (img) : ("https://bysperfeccionoral.com/wp-content/uploads/2020/01/136-1366211_group-of-10-guys-login-user-icon-png.jpg") }}
               style={styles.avatarPerfil} />

                 <Ionicons style={styles.pencilAvatar} name="pencil-outline" size={20} color='black' onPress={cargarFoto}/>
         </View>
         <Text  style={styles.titleName}> 
         {/* {data ? [data.names , data.lastnames] : 'Loading...'} */}
        { data?.names } {data?.lastnames}
         </Text>
        </View>


      {/* Contenidos de los inputs */}
     <View style={styles.contentDatos}>
         <Text style={styles.titleDato} >Numero de telefono</Text>
        <View style={styles.datos}>
          <Ionicons name="call-outline" size={20} color='black' />   
          <Text style={styles.dato}>
         {data?.phone}
          </Text>
          <TouchableOpacity onPress={() => {navigator.navigate('EditeTelefono')}}>
            <Ionicons name="pencil-outline" size={20} color='black' />
          </TouchableOpacity>
          
        </View>    
        <Text style={styles.titleDato}>Correo electronico  </Text>
        <View style={styles.datos}>
          <Ionicons name="mail-outline" size={20} color='black' />
          <Text style={styles.dato}>
          {data?.email}
          </Text>
          <TouchableOpacity onPress={() => {navigator.navigate('EditeMail')}}>
            <Ionicons name="pencil-outline" size={20} color='black' />
          </TouchableOpacity>
          
        </View>

        <Text style={styles.titleDato}>  Direccion</Text>
        <View style={styles.datos}>
          <Ionicons name="location-outline" size={20} color='black' />
          <Text style={styles.dato}>
          {data?.address}
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
