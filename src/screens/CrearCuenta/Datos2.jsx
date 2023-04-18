import React, {useContext} from 'react'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TouchableOpacity, TextInput } from 'react-native'
import { UsuarioContext, DataExtraContext } from '../../contextCrearUsuario/CrearUsuarioContext'
import { useState } from 'react'

export const Datos2 = () => {

// Funcion para cargar en el estado global los datos de los inputs
  const [login, loginAction] = useContext(UsuarioContext);
  const [data, dataAction] = useContext(DataExtraContext);
  const [error, setError] = useState({
    caracteres:false,
    mayuscula:false,
    clave:false
  });
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
    // controlPassword( login, error)
};


const onChangeDataExtra = (name, value,login, data ) =>{
  dataAction({
    type: name,
    data: value
})
confClave(login, data)
};

// CONTROLAR QUE LA CLAVE CUMPLA CON LOS REQUISITOS

const controlPassword = (error, login) =>{
  
    const res = /[A-Z]/.test(login.password);
    console.log(res, 'set')
    if (res == false) {
      setError({
        ...error,
        [mayuscula] : true
      })     
    }else{
      setError({
        ...error,
        [mayuscula] : false
      })
    }

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
            <Text style={styles.titleInput}>Contraseña</Text>           
            <TextInput secureTextEntry={true}  onChangeText={(value)=>onChangeData('password', value)}  style={styles.input} placeholder="Contraseña"/>
          
              {/* {error.mayuscula && <Text style={styles.textError}>La clave debe contener al menos una mayúscula</Text> }  */}
            {/* {error.caracteres && (
              <Text style={styles.textError}>La clave debe contener 8 caracteres</Text>
            )} */}
            <Text style={styles.titleInput}>Repetir contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={(value)=>onChangeDataExtra('repPassword', value,login, data )} placeholder="Repetir contraseña"/>
            {error.clave && (
              <Text style={styles.textError}>Las claves no coinciden</Text>
            )}
        </View>
        
    </View>
  )
}
