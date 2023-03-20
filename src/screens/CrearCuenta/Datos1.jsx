import React from 'react'
import * as MediaLibrary from 'expo-media-library';
import * as  ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TouchableOpacity, TextInput } from 'react-native'

export const Datos1 = () => {

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
  }
  return (
    <View style={styles.content}>
        <View style={styles.contentInputs}>
            <Text style={styles.titleInput}>Nombre</Text>
            <TextInput style={styles.input} placeholder="Nombre"/>
            <Text style={styles.titleInput}>Apellido</Text>
            <TextInput style={styles.input} placeholder="Apellido"/>
        </View>
        <TouchableOpacity  onPress={cargarFoto} style={styles.btn}>
            <Text style={styles.textBtn}>Cargar foto de DNI</Text>
        </TouchableOpacity>
        <View style={styles.conteinerTextCam}>
          <Text style={styles.titleTextCam}>
            ¿Por qué pedimos foto de tu DNI?
          </Text>
          <Text style={styles.parrafoTextCam}>
               Corroboramos que todos los datos sean reales y de esta forma evitar usuarios falsos que atenten con el funcionamiento óptimo de la app.
          </Text>
        </View>
    </View>
  )
}
