import React from 'react';
import {styles} from './ThemeMiPerfil'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
export const MiPerfil = () => {
  const navigator = useNavigation();
  return (
    <View>
        <View style={styles.contImgAvatar}>
          <View style={styles.contentAvatar}>
              <Image source={{uri:"https://static.dw.com/image/64142948_303.jpg"}}
                style={styles.avatarPerfil} />
         </View>
        </View>
     <View style={styles.contentDatos}>
        <View style={styles.datos}>
          <Text style={styles.titleDato}>
            Nombre completo
          </Text>
          <Text style={styles.dato}>
           Leonel Andres Messi
          </Text>
        </View>
        <View style={styles.datos}>
          <Text style={styles.titleDato}>
            Correo electronico  
          </Text>
          <Text style={styles.dato}>
             lapulga@messi.com
          </Text>
        </View>
        <View style={styles.datos}>
          <Text style={styles.titleDato}>
            Direccion
          </Text>
          <Text style={styles.dato}>
              A la vuelta de la torre efield 323
          </Text>
        </View>
    </View>
    <View style={styles.contentBtnEdit}>
      <TouchableOpacity  onPress={() => {navigator.navigate('EditPerfil')}} style={styles.btnEdit}>
        <Text style={styles.textBtn}>
        <Ionicons name="pencil-outline" size={15} color='#004494' /> Editar cuenta
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}
