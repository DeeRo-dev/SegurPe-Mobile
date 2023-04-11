import React, { useState, useContext } from "react";
import { styles } from "./ThemeCrearCuenta";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { DataExtraContext, UsuarioContext } from "../../contextCrearUsuario/CrearUsuarioContext";
import { performRequest } from "../../helpers/api";
import { getUserToken, saveUserInfo } from "../../helpers/store";
import { USER } from "../../helpers/const";


export const Datos3 = () => {
  const [date, dataAction] = useContext(DataExtraContext);

  const [login, loginAction] = useContext(UsuarioContext);
  // Funcion para cargar en el estado global los datos de los inputs
  const onChangeData = (name, value) => {
    loginAction({
      type: name,
      data: value,
    });

  };
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

  const controlError = (login) => {
    // falta controlar la img que este completo
    if (
      !login.names ||
      !login.lastnames ||
      !login.phone ||
      !login.email ||
      !login.password 
    ) {
      return true;
    }
    return false;
  };

  const envDatos = async (data) => {
    if (data) {
      // darle la nueva estructura y borrar este comentario
      console.log(data.imgprofile, 'desdeenvDatos')
      const result = await performRequest('POST', 'auth/signupUsers',data , null,null )
      console.log(result)
      if (result.data.token) {
        // Guarda un token de usuario en el almacenamiento seguro.
        saveUserInfo(USER, result.data.token)
       // Obtiene un token de usuario del almacenamiento seguro.
        const tokenSeg = await getUserToken(USER)
        console.log(tokenSeg, 'entro')
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
              controlError(login) ? styles.bkColorNoListo : styles.bkColorListo,
            ]}
          >
            <Text style={styles.textBtnLog}>Crear una cuenta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
