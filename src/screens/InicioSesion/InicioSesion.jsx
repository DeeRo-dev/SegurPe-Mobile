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

<<<<<<< HEAD
=======


>>>>>>> 8bf520b5a28896a5049cf57279e47ba201f7d447
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
  // cuenta
<<<<<<< HEAD
  // EMAIL:Derek@gmail.com
  // CLAVE:87654321Derek
  const sendLogin = async (data) => {
    try {
      if (data) {
        const result = await performRequest(
          "POST",
          "auth/loginSerenazgos",
          data,
          null,
          null
        );
        console.log(result.data, "esto devuelveee");
        if (result.data.token) {
          // Guarda un token de usuario en el almacenamiento seguro.
          await saveUserToken(TOKEN, result.data.token);
          await saveUserInfo(USER, result.data);
        }
      }
    } catch (error) {
      console.log(error);
=======
  // EMAIL:primerserenazgo@gmail.com
  // CLAVE: OecXNUZb
  const sendLogin = async (data, date) => {
    try {
      if (data) {
        const result = await performRequest('POST', 'auth/loginSerenazgos',data , null, null)
      //  console.log(result.data, 'esto devuelve')
       if (result.data.token) {
         // Guarda un token de usuario en el almacenamiento seguro.
         await saveUserToken(TOKEN, result.data.token)
         await saveUserInfo(USER,result.data)
         dateAction(
          {
            type: 'singUp',
            data: result.data.token
          })
          return navigator.navigate("Map") 
     } 
   }
  
     
  
    } catch (error) {
      dateAction(
        {
          type: 'addError',
          data: error
        })
     
       console.log(error, 'entre en el error del trycatch')
       alert('Ocurrió un error con el context: ' + date.errorMessage);
>>>>>>> 8bf520b5a28896a5049cf57279e47ba201f7d447
    }
  };

    console.log(date,'datastate') 


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
<<<<<<< HEAD
        // disabled={!datos.email || !datos.clave}
        onPress={() => sendLogin(datos)}
        style={styles.btn}
=======

        disabled={!datos.email || !datos.password}
        onPress={() => sendLogin(datos, date)}
        style={[styles.btn,  !datos.email || !datos.password ? styles.bkColorNoListo : styles.bkColorListo]}
>>>>>>> 8bf520b5a28896a5049cf57279e47ba201f7d447
      >
        <Text style={styles.textBtn}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};
