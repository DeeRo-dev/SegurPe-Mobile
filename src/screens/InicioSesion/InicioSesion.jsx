import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./ThemeInicioSesion";
import { performRequest } from "../../helpers/api";
import { getUserToken, saveUserInfo } from "../../helpers/store";
import { TOKEN, USER } from "../../helpers/const";

export const InicioSesion = () => {
  const navigator = useNavigation();
  const [error, setError] = useState(false);
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

 

  const cargarDatos = (name, value) => {
    setDatos({
      ...datos,
      [name]: value,
    });
  };
  console.log(datos);

  // Funcion para inicio de sesion
  // cuenta
  // EMAIL:Derek@gmail.com
  // CLAVE:87654321Derek
  const sendLogin = async (data) => {
    if (data) {
         const result = await performRequest('POST', 'auth/loginUsers',data , null, null)
        console.log(result.data, 'esto devuelve')
        if (result.data.token) {
          // Guarda un token de usuario en el almacenamiento seguro.
          await saveUserInfo(TOKEN, result.data.token)
          await saveUserInfo(USER, data)
        // Obtiene un token de usuario del almacenamiento seguro.
          const dataSeg = await getUserToken(USER)
          const tokenSeg = await getUserToken(TOKEN)
           console.log(dataSeg, 'entro')
           console.log(tokenSeg, 'entro')
      } 
    }
  };


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
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={(value) => cargarDatos("password", value)}
        />
      </View>

      <TouchableOpacity

        // disabled={!datos.email || !datos.clave}
        onPress={() => sendLogin(datos)}
        style={styles.btn}
      >
        <Text style={styles.textBtn}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};
