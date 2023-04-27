import React, { useState, useContext } from "react";
import { styles } from "./ThemeCrearCuenta";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { DataExtraContext, UsuarioContext } from "../../contextCrearUsuario/CrearUsuarioContext";
import { performRequest } from "../../helpers/api";
import { useNavigation } from "@react-navigation/native";


export const Datos3 = () => {

  navigate = useNavigation()
 //DATOS GLOBALES
  const [data, dataAction] = useContext(DataExtraContext);
  const [login, loginAction] = useContext(UsuarioContext);

  //  CONTROL DEL CHECK TERMINOS Y CONDISIONES
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (name) => {
    setIsChecked(!isChecked);
    onChangeDataExtra(name, !isChecked);
  }
  // Funcion para cargar en el estado global los datos de los inputs
 
  const onChangeDataExtra = (name, value) => {
    dataAction({
      type: name,
      data: value,
    });

  };

  
//CONTROL PARA QUE TODOS LOS CAMPOS ESTEN COMPLETOS, RETORNA TRUE SI ESTAN COMPETO SI NO FALSE
  const controlError = (login,data) => {
    // falta controlar la img que este completo
    if (
      !login.names ||
      !login.lastnames ||
      !login.phone ||
      !login.email ||
      !login.password ||
      !data.codVer ||
      !login.birthdate ||
      !data.repPassword ||
      !data.terminos 
    ) {
      return true
    }else return false
  };
 
  

  const envDatos = async (data, img) => {
    const obj = {
      imgObj:img
    }
    if (data) {
      try {
         const result = await performRequest('POST', 'auth/signupUsers',data , null, null)
        console.log(result)
      // SI LA RESPUESTA ES BUENA NAVEGAR HACIA INICIO DE SESION <-----
      return navigate.navigate('HomeRegistrarIniciarSesion')

      } catch (error) {
        console.log(error, 'no se pudo registrar')
        alert('Ocurrió un error: ' + error);
      }
        
    }
  };

  return (
    <View style={styles.contentTerminosCondiciones}>
      <ScrollView>
        <Text style={styles.titleCondiciones}>Términos y condiciones</Text>
        <View>
          <View>
            <Text style={styles.subTitleCondiciones}>Privacidad</Text>
            <Text style={styles.parrafoCondiciones}>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex
              duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
              mollit dolore cillum minim tempor enim. Elit aute irure tempor
              cupidatat incididunt sint deserunt ut voluptate aute id deserunt
              nisi.Aliqua id fugiat nostrud irure.
            </Text>
          </View>
          <View>
            <Text style={styles.subTitleCondiciones}>Cuentas</Text>
            <Text style={styles.parrafoCondiciones}>
              ute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea
              quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit
              dolore cillum minim
            </Text>
          </View>
        </View>
        <CheckBox
          title="Acepto los términos y condiciones"
          checked={isChecked}
          onPress={() => {
            handleCheckboxChange("terminos");
          }}
          // onChangeText={(value)=>onChangeData('email', value)}
          checkedColor={"#000000"}
          containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
        />
        <View style={styles.contentBtnLog}>
          <TouchableOpacity
             onPress={() => envDatos(login)}
            style={[
              styles.btnLog,
              controlError(login, data)? styles.bkColorNoListo : styles.bkColorListo,
            ]}
             disabled={controlError(login, data)}
          >
            <Text style={styles.textBtnLog}>Crear una cuenta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
