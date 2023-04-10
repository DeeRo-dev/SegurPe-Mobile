import React, {useContext} from 'react'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TouchableOpacity, TextInput } from 'react-native'
import { UsuarioContext } from '../../contextCrearUsuario/CrearUsuarioContext'

export const Datos2 = () => {

// Funcion para cargar en el estado global los datos de los inputs
  const [login, loginAction] = useContext(UsuarioContext)
  const onChangeData = (name, value)=>{
    loginAction({
      type: name,
      data: value
    })
    
}
console.log(login)
  return (
    <View>
        <View>
            <Text style={styles.titleInput}>Email</Text>
            <TextInput style={styles.input}  onChangeText={(value)=>onChangeData('email', value)}  placeholder="Email"/>
            <Text style={styles.titleInput}>Contraseña</Text>
            <TextInput secureTextEntry={true}  onChangeText={(value)=>onChangeData('password', value)}  style={styles.input} placeholder="Contraseña"/>
            <Text style={styles.titleInput}>Repetir contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Repetir contraseña"/>
        </View>
        
    </View>
  )
}
