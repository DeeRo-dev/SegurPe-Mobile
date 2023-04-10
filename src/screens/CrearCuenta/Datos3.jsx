import React, { useState, useContext } from "react";
import { styles } from "./ThemeCrearCuenta";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { UsuarioContext } from "../../contextCrearUsuario/CrearUsuarioContext";
import { performRequest } from "../../helpers/api";
import { saveUserInfo } from "../../helpers/store";

export const Datos3 = () => {
  const [login, loginAction] = useContext(UsuarioContext);
  // Funcion para cargar en el estado global los datos de los inputs
  const onChangeData = (name, value) => {
    loginAction({
      type: name,
      data: value,
    });
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (name) => {
    setIsChecked(!isChecked);
    onChangeData(name, !isChecked);
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

  const envDatos = (keyname,data) => {
    if (data) {
      // darle la nueva estructura y borrar este comentario
      
        saveUserInfo(keyname, data)
    
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
