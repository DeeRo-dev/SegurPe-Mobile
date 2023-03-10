import React from 'react';
import {styles} from './ThemeMiPerfil'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export const MiPerfil = () => {
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
    <View>
      <TouchableOpacity>
        <Text>
          Editar cuenta
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}
