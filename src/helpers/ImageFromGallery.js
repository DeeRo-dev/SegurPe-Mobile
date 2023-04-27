import * as MediaLibrary from 'expo-media-library';
import * as  ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native'


// FUNCION PARA TENER ACCESO A LA GALERIA 
//RETORNA LA URL
export const loadImageFromGallery = async(array) =>{
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