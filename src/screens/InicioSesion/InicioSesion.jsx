import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native';
import {styles} from './ThemeInicioSesion'

export const InicioSesion = () => {
  const navigator = useNavigation()
  const [datos, setDatos] = useState({
    email:'',
    clave:''
  });
  // const [clave, setClave] = useState('')

  const cargarDatos = (name, value) =>{
    
     setDatos({
      ...datos,
      [name]: value}
     )
  }
  console.log(datos)

  return (
    <View style={styles.content}>
      
        <View>
          <Text style={styles.titleInput}>Email</Text>
          <TextInput style={styles.input} placeholder="email" onChangeText={(value) => cargarDatos('email',value)}/>
          <Text style={styles.titleInput}>Contraseña</Text>
          <TextInput style={styles.input} placeholder="Contraseña" onChangeText={(value) => cargarDatos('clave', value)}/>
        </View>
        <TouchableOpacity  onPress={() => {navigator.navigate('maps')}} style={styles.btn}>
              <Text style={styles.textBtn}>Confirmar</Text>
          </TouchableOpacity>
    </View>
  )
}
