import React from 'react'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TouchableOpacity, TextInput } from 'react-native'

export const Datos2 = () => {
  return (
    <View>
        <View>
            <Text style={styles.titleInput}>Email</Text>
            <TextInput style={styles.input} placeholder="Email"/>
            <Text style={styles.titleInput}>Contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Contraseña"/>
            <Text style={styles.titleInput}>Repetir contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Repetir contraseña"/>
        </View>
        
    </View>
  )
}
