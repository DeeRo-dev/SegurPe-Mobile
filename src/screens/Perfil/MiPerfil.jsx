import React, { useState, useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./ThemeMiPerfil";
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { getUserInfo, getUserToken } from "../../helpers/store";
import { USER, TOKEN } from "../../helpers/const";
import { performRequest } from "../../helpers/api";

export const MiPerfil = () => {
  const navigator = useNavigation();
  const [data, setData] = useState({});

  // Libreria para cargar la image
  const loadImageFromGallery = async (array) => {
    const response = { status: false, image: null };
    const resultPermissions = await MediaLibrary.requestPermissionsAsync();

    if (resultPermissions.status === "denied") {
      Alert.alert("Debes darle permiso a la app para acceder a la galeria");
      return response;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: array,
    });
    if (result.canceled) {
      return response;
    }
    response.status = true;
    response.image = result.uri;
    return response;
  };
  const cargarFoto = async () => {
    const result = await loadImageFromGallery([1, 1]);
    console.log(result);
    // FUNCION PARA CARGAR LA IMAGEN DEL AVATAR
  };

  // FUNCION PARA TRAER INFO DEL USER
  const getUser = async (name) => {
    // Obtiene un token de usuario del almacenamiento seguro.
    const tokenSeg = await getUserToken(name);
    //  TRAER INFO DEL USUARIO
    if (tokenSeg) {
      const respon = await sendDataUser(tokenSeg);
      // console.log(respon, 'se dio')
    }
  };

  getUser(TOKEN);

  // FUNCION PARA REALIZAR EL GET USER
  const sendDataUser = async (token) => {
    const headerList = {
      Authorization: "Bearer " + token,
    };
    try {
      const response = await performRequest(
        "GET",
        "getSerenazgoProfileInfo",
        null,
        headerList,
        null
      );
      //  console.log(response, 'se dio por2')
      setData(response.data);
    } catch (error) {
      console.log(error, " entro en el error del senddata");
      return error;
    }
  };
  return (
    <View>
      {/* Avatar content */}
      <View style={styles.contNameAvatar}>
        <View style={styles.contentAvatar}>
          <Image
            source={{ uri: "https://static.dw.com/image/64142948_303.jpg" }}
            style={styles.avatarPerfil}
          />
          <Ionicons
            style={styles.pencilAvatar}
            name="pencil-outline"
            size={20}
            color="black"
            onPress={cargarFoto}
          />
        </View>
        <Text style={styles.titleName}>
          {/* {data ? [data.names , data.lastnames] : 'Loading...'} */}
          {data?.names} {data?.lastnames}
        </Text>
      </View>

      {/* Contenidos de los inputs */}
      <View style={styles.contentDatos}>
        <Text style={styles.titleDato}>Numero de telefono</Text>
        <View style={styles.datos}>
          <Ionicons name="call-outline" size={20} color="black" />
          <Text style={styles.dato}>{data?.phone}</Text>
          <TouchableOpacity
            onPress={() => {
              navigator.navigate("EditeTelefono");
            }}
          >
            <Ionicons name="pencil-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleDato}>Correo electronico </Text>
        <View style={styles.datos}>
          <Ionicons name="mail-outline" size={20} color="black" />
          <Text style={styles.dato}>{data?.email}</Text>
          <TouchableOpacity
            onPress={() => {
              navigator.navigate("EditeMail");
            }}
          >
            <Ionicons name="pencil-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.titleDato}> Direccion</Text>
        <View style={styles.datos}>
          <Ionicons name="location-outline" size={20} color="black" />
          <Text style={styles.dato}>{data?.address}</Text>

          <TouchableOpacity
            onPress={() => {
              navigator.navigate("EditeDireccion");
            }}
          >
            <Ionicons name="pencil-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.titleDato}> Contrasenia</Text>
        <View style={styles.datos}>
          <Ionicons name="lock-closed-outline" size={20} color="black" />
          <Text style={styles.dato}>***********</Text>
          <TouchableOpacity
            onPress={() => {
              navigator.navigate("EditeContrasenia");
            }}
          >
            <Ionicons name="pencil-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentBtnEcho}>
        {/* <TouchableOpacity  onPress={() => {navigator.navigate('MiPerfil')}} style={styles.btnEcho}>
       
        <Text style={styles.textBtnEcho}>
       Editar cuenta
        </Text>
      </TouchableOpacity> */}
      </View>
    </View>
  );
};
