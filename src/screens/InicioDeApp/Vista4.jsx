import { useNavigation } from '@react-navigation/core'
import React from 'react'

import {  StyleSheet, View,Text , TouchableOpacity} from 'react-native'

export const Vista4 = () => {
  const navigate = useNavigation()
  const OnNavegation = () =>{
    navigate.navigate('HomeRegistrarIniciarSesion')
  }
  return (
    <View>
        <Text>Emergencia</Text>
        <Text>En caso de una emergencia  podrás dar aviso y el serenazgo irá a tu ubicación para ayudar a resolverla.</Text>
        <TouchableOpacity
          onPress={OnNavegation}
         >
             <View style={style.btn}>
               <Text style={style.textBtn}>Continuar</Text>
            </View> 
          </TouchableOpacity>
    </View>
  )
}


const style = StyleSheet.create({

btn:{
  marginTop:10,
  paddingVertical:5,
  height:50,
  borderRadius:100,
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  backgroundColor:'#F57D20'
},
textBtn:{
  color:'#FFFFFF',
  fontSize:14,
},

})
