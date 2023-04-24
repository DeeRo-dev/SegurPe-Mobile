import React, {useContext,useState} from 'react';
import {styles} from './ThemeCrearCuenta';
import { View,Text, TouchableOpacity, TextInput } from 'react-native';
import { DataExtraContext, UsuarioContext } from '../../contextCrearUsuario/CrearUsuarioContext';
import { sendMessage } from '../../helpers/twillo';



export const Datos4 = () => {

  const [login, loginAction] = useContext(UsuarioContext)
  const [data, dataAction] = useContext(DataExtraContext)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleSendVerificationCode = async () => {

    try {
      // Llama a la API de Twilio Functions para enviar el código de autenticación
        const data = await sendMessage(phoneNumber)
       // Si la respuesta es satisfactoria, actualiza el estado con el código de autenticación generado
        console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeData = (name, value)=>{
    if (name === 'phone') {
      setPhoneNumber(value)
    }
    loginAction({
      type: name,
      data: value
    })
    setPhoneNumber(value)
}

const onChangeDataExtra = (name, value) =>{
  dataAction({
    type: name,
    data: value
})
}

  return (
    <View>  
        
        <View style={styles.contTitles}>
            <Text style={styles.titleCodeTel}>Enviaremos un código para verificar tu celular</Text>
            <Text style={styles.subTitleCodeTel}>Luego de ingresar tu número de teléfono completa el último campo con el código que te enviaremos.</Text>
        </View>

       <View>
            <Text style={styles.titleInput}>Número de teléfono</Text>
            <TextInput style={styles.input} onChangeText={(value)=>onChangeData('phone', value)} keyboardType="numeric" placeholder="154545"/>
            <TouchableOpacity onPress={()=>handleSendVerificationCode()}>
              <Text>
                Enviar codigo
              </Text>
            </TouchableOpacity>
            <Text style={styles.titleInput}>Código de verificación</Text>
            <TextInput  onChangeText={(value)=>onChangeDataExtra('codVer', value)} style={styles.input}  placeholder="Código de verificación"/> 
            {/* {/* onChangeText={(value)=>onChangeData('codVer', value)} */}
        </View>
        
    </View>
  )
}
