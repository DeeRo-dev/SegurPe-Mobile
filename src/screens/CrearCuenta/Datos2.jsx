import React, {useContext, useState} from 'react'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TouchableOpacity, TextInput } from 'react-native'
import { UsuarioContext, DataExtraContext } from '../../contextCrearUsuario/CrearUsuarioContext'


export const Datos2 = () => {

// Funcion para cargar en el estado global los datos de los inputs
  const [login, loginAction] = useContext(UsuarioContext);
  const [data, dataAction] = useContext(DataExtraContext);
  
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


const onChangeDataExtra = (name, value,login, data ) =>{
  dataAction({
    type: name,
    data: value
})
};

// CONTROLAR QUE LA CLAVE CUMPLA CON LOS REQUISITOS

const controlPassword = (data) =>{
  const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   return regex.test(data);
  // si cumple retorna True, si no False
}
const controlEmail = (data) =>{
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
   return regex.test(data);
  // si cumple retorna True, si no False
}
const controlDePasswords = (password, repPassword) =>{
    if (password === repPassword) {
      return true;
    }else{
      return false;
    }
  // si cumple retorna True, si no False
}

//  console.log(error, 'error clave') 
  return (
    <View>
        <View>
            <Text style={styles.titleInput}>Email</Text>
            <TextInput style={styles.input}  onChangeText={(value)=>onChangeData('email', value)}  placeholder="Email"/>
            {!controlEmail(login.email) &&   <Text style={styles.textError}>No cumple con las condiciones de un email</Text>}
            <Text style={styles.titleInput}>Contraseña</Text>           
            <TextInput secureTextEntry={true}  onChangeText={(value)=>onChangeData('password', value)}  style={styles.input} placeholder="Contraseña"/>
            {!controlPassword(login.password) &&   <Text style={styles.textError}>La clave debe contener al menos una mayúscula y 8 caracteres</Text>}
            <Text style={styles.titleInput}>Repetir contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={(value)=>onChangeDataExtra('repPassword', value,login, data )} placeholder="Repetir contraseña"/>
            {!controlDePasswords(login.password, data.repPassword) &&   <Text style={styles.textError}>Las claves no coinciden</Text>}
            
        </View>
        
    </View>
  )
}
