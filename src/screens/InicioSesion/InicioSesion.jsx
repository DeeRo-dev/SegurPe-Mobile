import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native';
import {styles} from './ThemeInicioSesion'

export const InicioSesion = () => {
  const navigator = useNavigation()
  return (
    <View style={styles.content}>
      
        <View>
          <Text style={styles.titleInput}>Email</Text>
          <TextInput style={styles.input} placeholder="email"/>
          <Text style={styles.titleInput}>Contraseña</Text>
          <TextInput style={styles.input} placeholder="Contraseña"/>
        </View>
        <TouchableOpacity  onPress={() => {navigator.navigate('maps')}} style={styles.btn}>
              <Text style={styles.textBtn}>Confirmar</Text>
          </TouchableOpacity>
    </View>
  )
}
