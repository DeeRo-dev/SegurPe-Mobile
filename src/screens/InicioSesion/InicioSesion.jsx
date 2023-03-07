import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native';
import {styles} from './ThemeInicioSesion'

export const InicioSesion = () => {
  const navigator = useNavigation()
  return (
    <View style={styles.content}>
      <Image style={styles.img} source={require('../../assets/Group169.png')}/>
        <View>
          <TextInput style={styles.input} placeholder="email"/>
          <TextInput style={styles.input} placeholder="Contrasenia"/>
        </View>
        <TouchableOpacity  onPress={() => {navigator.navigate('maps')}} style={styles.btn}>
              <Text style={styles.textBtn}>Confirmar</Text>
          </TouchableOpacity>
    </View>
  )
}
