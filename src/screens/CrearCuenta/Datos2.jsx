import React, {useContext, useState} from 'react'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TextInput } from 'react-native'
import { UsuarioContext, DataExtraContext } from '../../contextCrearUsuario/CrearUsuarioContext'
import { controlDePasswords, controlEmail, controlPassword } from '../../helpers/controlErrors'


export const Datos2 = () => {

// Funcion para cargar en el estado global los datos de los inputs
  const [login, loginAction] = useContext(UsuarioContext);
  const [data, dataAction] = useContext(DataExtraContext);


  // CARAGAR DATOS EN EL USE CONTEXT
  const onChangeData = (name, value)=>{
    if (name == 'email') {
      let data = value.toLowerCase()
      loginAction({
        type: name,
        data: data
      })
      
    }else{
      loginAction({
        type: name,
        data: value
      })
    }
};

// CARAGAR DATOS EN EL USE CONTEXT
const onChangeDataExtra = (name, value,) =>{
  dataAction({
    type: name,
    data: value
})
};

  return (
    <View>
        <View>
            <Text style={styles.titleInput}>Email</Text>
            <TextInput style={styles.input}  onChangeText={(value)=>onChangeData('email', value)}  placeholder="Email"/>
            {!controlEmail(login.email) && login.email.length > 1 &&   <Text style={styles.textError}>No cumple con las condiciones de un email</Text>}
            <Text style={styles.titleInput}>Contraseña</Text>           
            <TextInput secureTextEntry={true}  onChangeText={(value)=>onChangeData('password', value)}  style={styles.input} placeholder="Contraseña"/>
            {!controlPassword(login.password) && login.password.length > 1 &&  <Text style={styles.textError}>La clave debe contener al menos una mayúscula y 8 caracteres</Text>}
            <Text style={styles.titleInput}>Repetir contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={(value)=>onChangeDataExtra('repPassword', value,login, data )} placeholder="Repetir contraseña"/>
            {!controlDePasswords(login.password, data.repPassword) && data.repPassword.length > 1 &&   <Text style={styles.textError}>Las claves no coinciden</Text>}
        </View>
    </View>
  )
}
