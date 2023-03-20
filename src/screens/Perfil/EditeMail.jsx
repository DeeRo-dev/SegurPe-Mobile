import React, {useState}from 'react';
import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";


export const EditeMail = () => {

const [email, setEmail] = useState('')
const [confirmarEmail, setConfirmarEmail] = useState('')

const onChangeEmail = (value) =>{
  setEmail(value)
}
console.log(email)

const validarEmail = (emailValue)=>{
  let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if( validEmail.test(emailValue) ){
		console.log('true')
		// return true;
	}else{
		console.log('false')
		// return false;
  }
} 

const confEmail = (email, confEmail ) =>{
  if( email === confEmail){
		console.log('true')
		// return true;
	}else{
		console.log('false')
		// return false;
  }
}
validarEmail(email)
confEmail(email, confirmarEmail)
  return (
    <View style={style.content}>
         <View style={style.contNameAvatar}>
          <View style={style.contentAvatar}>
          <Ionicons name="mail-outline" size={40} color='black'/>
         </View>
         <Text  style={style.titleName}> Correo electrónico</Text>
        </View>

        <View style={style.contentDatos}>
        <View style={style.contTitles}>
          <Text style={style.titleExp}>Enviaremos un código para verificar tu celular</Text>
          <Text style={style.subTitleExp}>Luego de ingresar tu número de teléfono completa el último campo con el código que te enviaremos.</Text>
        </View>
        <View>
          <Text style={style.titleInputs}>Correo electrónico</Text>
          <TextInput  style={style.datos} onChangeText={(value)=> onChangeEmail(value)} placeholder='example@exp.com'/>
          <Text style={style.titleInputs}>Repetir correo electrónico</Text>
          <TextInput  style={style.datos} onChangeText={(value)=> setConfirmarEmail(value)} placeholder='example@exp.com'/>
          <Text style={style.titleInputs} >Código de verificación</Text>
          <TextInput  style={style.datos} placeholder='SDaf344'/>
        </View>
        <View style={style.contentBtn}>
          <TouchableOpacity>
            <View style={style.btn}>
               <Text style={style.textBtn}><Ionicons name="log-in-outline" size={20} color='#004494'/>  Enviar código</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
             <View style={style.btnListo}>
               <Text style={style.textBtnListo}>Listo</Text>
            </View> 
          </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
  content:{
    flex:1,
    alignItems:'center'
  },
  contentDatos:{
    width:'88%',
    marginTop:10
  },
  contNameAvatar:{
    height:120,
    flexDirection:'row',
    alignItems:'center',
},
contentAvatar:{
     borderBottomRadius:130,
     flexDirection:'row',
     marginLeft:-73,
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
contTitles:{
  marginLeft:15
},
titleExp:{
 color:'#75767F',
 fontSize:16,
},
subTitleExp:{
 color:'#75767F',
 fontSize:12,
 width:'80%'
},
titleInputs:{
  marginTop:20,
  marginLeft:15
},
datos:{
  marginTop:10,
  paddingVertical:5,
  borderBottomWidth:2,
  height:56,
  borderRadius:100,
  borderColor:'#C4C6CF',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  backgroundColor:'#D8E2FF',
  paddingLeft:22,
},
contentBtn:{
  marginTop:10,
},
btn:{
  marginTop:10,
  paddingVertical:5,
  borderWidth:1,
  height:50,
  borderRadius:100,
  borderColor:'#004494',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
},
textBtn:{
  color:'#004494',
  fontSize:14,
},
btnListo:{
  marginTop:10,
  paddingVertical:5,
  height:50,
  borderRadius:100,
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  backgroundColor:'#D5DBDB'
},
textBtnListo:{
  color:'#4D5656',
  fontSize:14,
},
})