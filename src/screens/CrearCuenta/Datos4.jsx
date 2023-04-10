import React, {useContext} from 'react';
import {styles} from './ThemeCrearCuenta';
import { View,Text, TouchableOpacity, TextInput } from 'react-native';
import { UsuarioContext } from '../../contextCrearUsuario/CrearUsuarioContext';



export const Datos4 = () => {
  const [login, loginAction] = useContext(UsuarioContext)
  const onChangeData = (name, value)=>{
    loginAction({
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
            <Text style={styles.titleInput}>Código de verificación</Text>
            <TextInput secureTextEntry={true} style={styles.input}  placeholder="Contraseña"/>
            {/* onChangeText={(value)=>onChangeData('codVer', value)} */}
        </View>
        
    </View>
  )
}
