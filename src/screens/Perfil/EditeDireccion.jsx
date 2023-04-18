import React, {useState}from 'react'
import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { TOKEN } from '../../helpers/const';
import { getUserToken } from '../../helpers/store';
import { performRequest } from '../../helpers/api';
import { useNavigation } from '@react-navigation/native';



export const EditeDireccion = () => {
  navigator = useNavigation();


  
  const [direc, setDirec] = useState({
    address:'',
  })

  const onChangeNum = (name, value) =>{
    setDirec({
      ...direc,
      [name]:value
    })
  }



  

// FUNCION PARA HACER LA PETICION
const sendDataUser = async (token, data) => {
  console.log(data, 'asds')
  const headerList = {
    "Authorization" : 'Bearer ' + token
  }
  try {
    const response = await performRequest('PUT', 'updateUserProfileInfo',data , headerList, null)
   console.log(response, 'se dio EXITOSO')
    // SI SE DA EXITOSO, TIENE QUE NAVEGAR A OTRA PANTALLA
    navigator.navigate("MiPerfil")
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
          <Ionicons name="location-outline" size={40} color='black'/>
         </View>
         <Text  style={style.titleName}> Dirección</Text>
        </View>

        <View style={style.contentDatos}>
        <View style={style.contTitles}>
          <Text style={style.titleExp}>Restablece tu dirección</Text>
          <Text style={style.subTitleExp}>Procura que la dirección sea de la residencia donde vives y que siempre esté actualizada.</Text>
        </View>
        <View>
          <Text style={style.titleInputs}>Dirección</Text>
          <TextInput  style={style.datos} placeholder="Berazategui e/bla y asd 234" onChangeText={(value)=> onChangeNum('address',value)}/>
          
        </View>
        <View style={style.contentBtn}>
          
          <TouchableOpacity onPress={()=> getUser(TOKEN, direc)
          }>
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
     marginLeft:-183,
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
  marginTop:280,
},
btnListo:{
  marginTop:10,
  paddingVertical:5,
  height:50,
  borderRadius:100,
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  backgroundColor:'#F57D20'
},
textBtnListo:{
  color:'#FFFFFF',
  fontSize:14,
},
})