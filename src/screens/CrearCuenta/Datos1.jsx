import React, {useContext, useState} from 'react'
import * as MediaLibrary from 'expo-media-library';
import * as  ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TouchableOpacity, TextInput} from 'react-native'
import { DataExtraContext, UsuarioContext } from '../../contextCrearUsuario/CrearUsuarioContext';
import DateTimePicker from '@react-native-community/datetimepicker';
export const Datos1 = () => {
  const [date, dataAction] = useContext(DataExtraContext);
  const [login, loginAction] = useContext(UsuarioContext)

  const [data, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    // Controlar que cuando se agrega la fecha sea en formato AAAA-MM-DD
    let fecha = data.toLocaleDateString().replace(/\//g, "-");
    let partes = fecha.split('-');
    let nuevoMes = partes[1].length === 1 ? '0' + partes[1] : partes[1];
    let nuevoDia = partes[0].length === 1 ? '0' + partes[0] : partes[0];
    let nuevaFecha = partes[2] + '-' + nuevoMes + '-' + nuevoDia;
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);

    onChangeData('birthdate', nuevaFecha)
  };


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
  return (
    <View style={styles.content}>
        <View style={styles.contentInputs}>
             <Text style={styles.titleInput}>Nombre</Text>
            <TextInput style={styles.input} onChangeText={(value)=>onChangeData('names', value)} placeholder="Nombre"/>
            <Text style={styles.titleInput}>Apellido</Text>
            <TextInput style={styles.input} onChangeText={(value)=>onChangeData('lastnames', value)} placeholder="Apellido"/> 
      
            <Text style={styles.titleInput}>Fecha de Nacimiento</Text>
            <TextInput
              style={styles.input}
              value={data? data.toLocaleDateString() : ''}
               onTouchStart={() => setShowDatePicker(true)}
               placeholder='AAAA-MM-DD'
            />

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="data"
          display="calendar"
          onChange={handleDateChange}
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

