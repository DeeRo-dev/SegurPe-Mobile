import React, {useContext, useState} from 'react'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TouchableOpacity, TextInput} from 'react-native'
import { UsuarioContext } from '../../contextCrearUsuario/CrearUsuarioContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import { loadImageFromGallery } from '../../helpers/ImageFromGallery';



export const Datos1 = () => {

  // Estado para controlar datos extra en el registro del user
  // const [data, dataAction] = useContext(DataExtraContext);
  // Estado para controlar datos del user
  const [login, loginAction] = useContext(UsuarioContext)

  // Estado para controlar la carga de la fecha
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  function showDatepicker() {
    setShowDatePicker(true);
  }
  
  const formatDate =(date) =>{
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
  // CARGAR LA IMAGEN DEL DNI
  // const onChangeDataExtra = (name, value) => {
  //   dataAction({
  //     type: name,
  //     data: value,
  //   });
  // };
  const cargarFoto = async() =>{
    const result = await loadImageFromGallery([1,1])
    // console.log(result,'URL IMG')
    // onChangeDataExtra('img', result.image)
  }
  
  return (
    <View style={styles.content}>
        <View style={styles.contentInputs}>
             <Text style={styles.titleInput}>Nombre</Text>
            <TextInput style={styles.input} onChangeText={(value)=>onChangeData('names', value)} placeholder="Nombre"/>
            <Text style={styles.titleInput}>Apellido</Text>
            <TextInput style={styles.input} onChangeText={(value)=>onChangeData('lastnames', value)} placeholder="Apellido"/> 
            <Text style={styles.titleInput}>Fecha de Nacimiento</Text>
            <TouchableOpacity
               onPress={showDatepicker}
            >
              <View style={styles.input}><Text>{formatDate(date)}</Text></View>
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
        onChangeData('birthdate', date)
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

