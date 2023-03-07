import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native';
import {styles} from './ThemeCrearCuenta';


export const CrearCuenta = () => {
  return (
    <View style={styles.content}>
      <Image style={styles.img} source={require('../../assets/Group169.png')}/>
        <View>
          <TextInput style={styles.input} placeholder="Nombre"/>
          <TextInput style={styles.input} placeholder="Apellido"/>
        </View>
        <TouchableOpacity   style={styles.btn}>
              <Text style={styles.textBtn}>Cargar foto de DNI</Text>
          </TouchableOpacity>
        <View>
            
        </View>
    </View>
  )
}
