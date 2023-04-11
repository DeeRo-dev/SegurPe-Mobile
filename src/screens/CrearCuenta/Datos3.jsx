import React, { useState, useContext } from "react";
import { styles } from "./ThemeCrearCuenta";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { DataExtraContext, UsuarioContext } from "../../contextCrearUsuario/CrearUsuarioContext";
import { performRequest } from "../../helpers/api";
import { getUserToken, saveUserInfo } from "../../helpers/store";
import { TOKEN, USER } from "../../helpers/const";


export const Datos3 = () => {
  const [date, dataAction] = useContext(DataExtraContext);
  const [login, loginAction] = useContext(UsuarioContext);
   // Estado para controlar que todos los campos del registro esten completos
   const [error, setError] = useState(false);



  // Funcion para cargar en el estado global los datos de los inputs
  // const onChangeData = (name, value) => {
  //   loginAction({
  //     type: name,
  //     data: value,
  //   });

  // };
  const onChangeDataExtra = (name, value) => {
    dataAction({
      type: name,
      data: value,
    });

  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (name) => {
    setIsChecked(!isChecked);
    onChangeDataExtra(name, !isChecked);
  };

  const controlError = (login,date,error) => {
    // falta controlar la img que este completo
    if (
      !login.names ||
      !login.lastnames ||
      !login.phone ||
      !login.email ||
      !login.password ||
      !date.codVer ||
      !date.img ||
      !date.repPassword ||
      !date.terminos 
    ) {
       if (error === false) {
        console.log('set err')
        setError(true);
       }
      
    }
    return false;
  };
  controlError(login, date, error)
  console.log(date, 'data exta')
  const envDatos = async (data, img) => {
    const obj = {
      imgObj:img
    }
    if (data) {
      try {
         const result = await performRequest('POST', 'auth/signupUsers',data , null, null)
        // console.log(result)
        // if (result.data.token) {
        //   // Guarda un token de usuario en el almacenamiento seguro.
        //   await saveUserInfo(TOKEN, result.data.token)
        //   await saveUserInfo(USER, data)
        // // Obtiene un token de usuario del almacenamiento seguro.
        //   const dataSeg = await getUserToken(USER)
        //   const tokenSeg = await getUserToken(TOKEN)
        //    console.log(dataSeg, 'entro')
        //    console.log(tokenSeg, 'entro')
      // } 
      // SI LA RESPUESTA ES BUENA NAVEGAR HACIA INICIO DE SESION <-----
      } catch (error) {
        console.log(error, 'no se pudo registrar')
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
            onPress={() => envDatos(login, date.img)}
            style={[
              styles.btnLog,
              error ? styles.bkColorNoListo : styles.bkColorListo,
            ]}
            // disabled={error}
          >
            <Text style={styles.textBtnLog}>Crear una cuenta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
