import React, {useContext, useState} from 'react'
import * as MediaLibrary from 'expo-media-library';
import * as  ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TouchableOpacity, TextInput} from 'react-native'
import { DataExtraContext, UsuarioContext } from '../../contextCrearUsuario/CrearUsuarioContext';
import DateTimePicker from '@react-native-community/datetimepicker';



export const Datos1 = () => {

  // Estado para controlar datos extra en el registro del user
  const [data, dataAction] = useContext(DataExtraContext);
   // Estado para controlar datos del user
  const [login, loginAction] = useContext(UsuarioContext)
    // Estado para controlar la carga de la fecha
  const [date, setDate] = useState(new Date());
   const [birthdate, setBirthdate]= useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  function showDatepicker() {
    setShowDatePicker(true);
  }
  
  function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const fecha = `${year}-${month}-${day}`
  
      return fecha;
  }
  
  

// Funcion para cargar en el estado global los datos de los inputs
  const onChangeData = (name, value)=>{
      loginAction({
        type: name,
        data: value
      })
      
  }
  const onChangeDataExtra = (name, value) => {
    dataAction({
      type: name,
      data: value,
    });

  };

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
    onChangeDataExtra('img', result.image)
    // console.log(result.image)
  }
  console.log(date)
  return (
    <View style={styles.content}>
        <View style={styles.contentInputs}>
             <Text style={styles.titleInput}>Nombre</Text>
            <TextInput style={styles.input} onChangeText={(value)=>onChangeData('names', value)} placeholder="Nombre"/>
            <Text style={styles.titleInput}>Apellido</Text>
            <TextInput style={styles.input} onChangeText={(value)=>onChangeData('lastnames', value)} placeholder="Apellido"/> 
      
            <Text style={styles.titleInput}>Fecha de Nacimiento</Text>
            <TouchableOpacity
              style={styles.input}
               onPress={showDatepicker}
            >
              <Text style={styles.input}>{formatDate(date)}</Text>
            </TouchableOpacity>

      {showDatePicker && (
  <DateTimePicker
    value={date}
    mode="date"
    display="default"
    onChange={(event, selectedDate) => {
      setShowDatePicker(false);
      if (selectedDate) {
        setDate(selectedDate);
      }
    }}
  />
)}

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

