import React, { useState, useContext } from "react";
import { styles } from "./ThemeCrearCuenta";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { DataExtraContext, UsuarioContext } from "../../contextCrearUsuario/CrearUsuarioContext";
import { performRequest } from "../../helpers/api";
import { getUserToken, saveUserInfo } from "../../helpers/store";
import { TOKEN, USER } from "../../helpers/const";


export const Datos3 = () => {
  const [data, dataAction] = useContext(DataExtraContext);
  const [login, loginAction] = useContext(UsuarioContext);
   // Estado para controlar que todos los campos del registro esten completos
   const [error, setError] = useState(false);



  // Funcion para cargar en el estado global los datos de los inputs
 
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
    console.log(error, 'el error estas en')
  }
  

  const controlError = (login,data,error) => {
    // falta controlar la img que este completo
     //  && LA FECHA DE NACIMIENTO
    if (
      !login.names ||
      !login.lastnames ||
      !login.phone ||
      !login.email ||
      !login.password ||
      !data.codVer ||
      // !date.img ||
      !data.repPassword ||
      !data.terminos 
    ) {
       if (error === false) {
        setError(true);
       }
      
    }
  };
  controlError(login, data, error)
  console.log(data, 'data exta')

  const envDatos = async (data, img) => {
    const obj = {
      imgObj:img
    }
    if (data) {
      try {
         const result = await performRequest('POST', 'auth/signupUsers',data , null, null)
        console.log(result)

      // SI LA RESPUESTA ES BUENA NAVEGAR HACIA INICIO DE SESION <-----
      } catch (error) {
        console.log(error, 'no se pudo registrar')
      }
        
    }
  };
console.log(data, login)
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
              !login.names ||
              !login.lastnames ||
              !login.phone ||
              !login.email ||
              !login.password ||
              !data.codVer ||
              // !date.img ||
              !data.repPassword ||
              !data.terminos  ? styles.bkColorNoListo : styles.bkColorListo,
            ]}
             disabled={ !login.names ||
              !login.lastnames ||
              !login.phone ||
              !login.email ||
              !login.password ||
              !data.codVer ||
              // !date.img ||
              !data.repPassword ||
              !data.terminos }
          >
            <Text style={styles.textBtnLog}>Crear una cuenta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
