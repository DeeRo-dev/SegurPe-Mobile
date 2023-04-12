import React, {useState}from 'react'
import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { TOKEN } from '../../helpers/const';
import { getUserToken } from '../../helpers/store';
import { performRequest } from '../../helpers/api';



export const EditeContrasenia = () => {
  
const [clave, setClave] = useState({
  password:'',
  confirmarClave:''
})


// setear la nueva clave
const onChangeClave = (name, value) =>{
  setClave(
    {
      ...clave,
      [name]:value
    }
    )
}
console.log(clave)


// Ver que coincidan las claves
// const confClave = (clave, confirmarClave ) =>{
//   if( clave === confirmarClave){
// 		console.log('true')
// 		// return true;
// 	}else{
// 		console.log('false')
// 		// return false;
//   }
// }
// // chequear en la api la clave actual
// const checkClave = () =>{
//   console.log('buscar en la API si concide la clave')
// }


// confClave (clave, confirmarClave);

 // Falta tener el jwt
 
// FUNCION PARA HACER LA PETICION
const sendDataUser = async (token, data) => {
  const headerList = {
    "Authorization" : 'Bearer ' + token
  }
  try {
    const response = await performRequest('PUT', 'updateUserProfileInfo',data , headerList, null)
   console.log(response, 'se dio EXITOSO')
    // SI SE DA EXITOSO, TIENE QUE NAVEGAR A OTRA PANTALLA
  } catch (error) { 
       console.log(error, ' entro en el error del senddata')
       return error
  }
}





// FUNCION PARA TRAER INFO DEL USER
const getUser = async (name, data)=>{
  // Obtiene un token de usuario del almacenamiento seguro.
  const tokenSeg = await getUserToken(name)
  //  TRAER INFO DEL USUARIO
     if (tokenSeg) {
        const respon = await sendDataUser(tokenSeg, data)
        // console.log(respon, 'se dio')
     }
}

  return (
    <View style={style.content}>
         <View style={style.contNameAvatar}>
          <View style={style.contentAvatar}>
          <Ionicons name="lock-closed-outline" size={40} color='black'/>
         </View>
         <Text  style={style.titleName}> Contraseña</Text>
        </View>

        <View style={style.contentDatos}>
        <View style={style.contTitles}>
          <Text style={style.titleExp}>Restablecer contraseña</Text>
          <Text style={style.subTitleExp}>ingresa tu contraseña anterior y luego, la nueva contraseña dos veces. Si no recuerdas tu contraseña actual haz click en “olvidé mi contraseña”</Text>
        </View>
        <View>
          <Text style={style.titleInputs}>Contraseña actual</Text>
          <TextInput  style={style.datos} placeholder="Password act" onChangeText={(value)=> checkClave(value)}/>
          <Text style={style.titleInputs}>Nueva contraseña</Text>
          <TextInput  style={style.datos} placeholder="Password new" onChangeText={(value)=> onChangeClave('password',value)}/>
          <Text style={style.titleInputs}>Repite la nueva contraseña</Text>
          <TextInput  style={style.datos} placeholder="Password repite" onChangeText={(value)=> onChangeClave('confirmarClave',value)}/>
        </View>
        <View style={style.contentBtn}>
          <TouchableOpacity>
            <View style={style.btn}>
               <Text style={style.textBtn}>Olvidé mi contraseña</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>getUser(TOKEN, clave)}>
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
     marginLeft:-143,
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
 width:'95%'
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