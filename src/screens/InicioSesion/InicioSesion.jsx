import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect, useContext } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./ThemeInicioSesion";
import { performRequest } from "../../helpers/api";
import { getUserToken, saveUserInfo, saveUserToken } from "../../helpers/store";
import { TOKEN, USER } from "../../helpers/const";
import { AuthContext } from "../../contextCrearUsuario/AuthContext";


export const InicioSesion = () => {
  const navigator = useNavigation();
  const [date, dateAction] = useContext(AuthContext)
  const [loggedIn, setLoggedIn] = useState(false);
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });



  const cargarDatos = (name, value) => {
    if (name == 'email') {
      let data = value.toLowerCase()
      setDatos({
        ...datos,
        [name]: data
      })
      
    }else{
    setDatos({
      ...datos,
      [name]: value,
    });
  }
}
  // console.log(datos);

  // Funcion para inicio de sesion

  const sendLogin = async (data) => {
    try {
      if (data) {
        const result = await performRequest('POST', 'auth/loginUsers',data , null, null)
        dateAction(
          {
            type: 'loading',
            
          })
       console.log(result.data, 'esto devuelve')
       if (result.data.token) {
         // Guarda un token de usuario en el almacenamiento seguro.
         await saveUserToken(TOKEN, result.data.token)
         await saveUserInfo(USER,result.data)
         dateAction(
          {
            type: 'singUp',
            data: result.data.token
          })
           return navigator.navigate("HomeRegistrarIniciarSesion") 
     } 
   }
  
    } catch (error) {
      dateAction(
        {
          type: 'addError',
          data: error
        })
     
       console.log(error, 'entre en el error del trycatch')
        alert('Ocurrió un error: ' + date.errorMessage);
    }
  };

   
const [data, setData] = useState(false)
//TRAE INFO DEL TOKEN DEL USUARIO GUARDADO EN EL STORAGE
const infoToken = async(name) =>{
  const token = await getUserToken(name)
  console.log(token, 'entddddr')
  if (token) {
       setData(true)
  }
  else{
    setData(false)
  }
}

infoToken(TOKEN)
console.log(data,'data user token') 


  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.titleInput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={(value) => cargarDatos("email", value)}
        />
        <Text style={styles.titleInput}>Contraseña</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={(value) => cargarDatos("password", value)}
        />
      </View>

      <TouchableOpacity

        disabled={!datos.email || !datos.password}
        onPress={() => sendLogin(datos)}
        style={[styles.btn,  !datos.email || !datos.password ? styles.bkColorNoListo : styles.bkColorListo]}
      >
        <Text style={styles.textBtn}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};
