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
    loginAction({
      type: name,
      data: value
    })
    
};


const onChangeDataExtra = (name, value,login, data ) =>{
  confClave(login, data)
  dataAction({
    type: name,
    data: value
})
};

const validatePassword = (data) => {
  const regex = /^(?=.*[A-Z]).{8,}$/;
  return regex.test(data);
}

const confClave = (login, data ) =>{
  if (login.password) {
    const res = validatePassword(login.password)
    if (res === false) {
      setError(true)
    } }
  
  if( login.password === data.repPassword){
   if (error == false) {
    setError(true)
    return;
   }
	}else{
		setError(false)
		 return;
  }
}


console.log(error)
  return (
    <View>
        <View>
            <Text style={styles.titleInput}>Email</Text>
            <TextInput style={styles.input}  onChangeText={(value)=>onChangeData('email', value)}  placeholder="Email"/>
            <Text style={styles.titleInput}>Contraseña</Text>
            {error && (
              <Text style={styles.textError}>La clave debe contener 8 caracteres</Text>
            )}
            <TextInput secureTextEntry={true}  onChangeText={(value)=>onChangeData('password', value)}  style={styles.input} placeholder="Contraseña"/>
            <Text style={styles.titleInput}>Repetir contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={(value)=>onChangeDataExtra('repPassword', value,login, data )} placeholder="Repetir contraseña"/>
            {error && (
              <Text style={styles.textError}>Las claves no coinciden</Text>
            )}
        </View>
        
    </View>
  )
}
