import React from 'react'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TouchableOpacity, TextInput } from 'react-native'

export const Datos2 = () => {
  return (
    <View>
        <View>
            <TextInput style={styles.input} placeholder="Email"/>
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Contrase;e"/>
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Repetir contrasenia"/>
        </View>
        
    </View>
  )
}
