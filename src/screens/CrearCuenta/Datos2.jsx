import React, {useContext} from 'react'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TouchableOpacity, TextInput } from 'react-native'
import { UsuarioContext, DataExtraContext } from '../../contextCrearUsuario/CrearUsuarioContext'
import { useState } from 'react'

export const Datos2 = () => {

// Funcion para cargar en el estado global los datos de los inputs
  const [login, loginAction] = useContext(UsuarioContext);
  const [data, dataAction] = useContext(DataExtraContext);
  const [error, setError] = useState(false);

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
confClave(login, data)
};

// CONTROLAR QUE LA CLAVE CUMPLA CON LOS REQUISITOS

const controlPassword = (data) =>{
  const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   return regex.test(data);
  // si cumple retorna True, si no False
}
const controlEmail = (data) =>{
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return regex.test(data);
  // si cumple retorna True, si no False
}
const confClave = (login, data ) =>{
  if(login.password != data.repPassword){
   if (error == false) {
    console.log(error, 'entro')
    setError({
      ...error,
     [clave]: true
    })
    return;
   }
	}
  else{
		setError({
      ...error,
      [clave] : false
    })
		 return;
  }
}


 console.log(error, 'error clave') 
  return (
    <View>
        <View>
            <Text style={styles.titleInput}>Email</Text>
            <TextInput style={styles.input}  onChangeText={(value)=>onChangeData('email', value)}  placeholder="Email"/>
            {!controlEmail(login.password) &&   <Text style={styles.textError}>No cumple con las condiciones de un email</Text>}
            <Text style={styles.titleInput}>Contraseña</Text>           
            <TextInput secureTextEntry={true}  onChangeText={(value)=>onChangeData('password', value)}  style={styles.input} placeholder="Contraseña"/>
            {!controlPassword(login.password) &&   <Text style={styles.textError}>La clave debe contener al menos una mayúscula y 8 caracteres</Text>}
            <Text style={styles.titleInput}>Repetir contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={(value)=>onChangeDataExtra('repPassword', value,login, data )} placeholder="Repetir contraseña"/>
            {error.clave && (
              <Text style={styles.textError}>Las claves no coinciden</Text>
            )}
        </View>
        
    </View>
  )
}
