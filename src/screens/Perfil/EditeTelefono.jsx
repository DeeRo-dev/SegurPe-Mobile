import React from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
export const EditeTelefono = () => {
  return (
    <View>
         <View style={style.contNameAvatar}>
          <View style={style.contentAvatar}>
          <Ionicons name="call-outline" size={40} color='black'/>
         </View>
         <Text  style={style.titleName}> Número de teléfono</Text>
        </View>

        <View>
          <Text>Enviaremos un código para verificar tu celular</Text>
          <Text>Luego de ingresar tu número de teléfono completa el último campo con el código que te enviaremos.</Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
  contNameAvatar:{
    height:120,
    flexDirection:'row',
    alignItems:'center',
},
contentAvatar:{
     borderBottomRadius:130,
     flexDirection:'row',
     marginLeft:23,
    backgroundColor:'#C5D6FF',
    width:75,
    height:75,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
},
titleName:{
  fontSize:24,
  marginLeft:10
},

})