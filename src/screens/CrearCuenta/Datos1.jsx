import React from 'react'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TouchableOpacity, TextInput } from 'react-native'

export const Datos1 = () => {
  return (
    <View>
        <View>
            <TextInput style={styles.input} placeholder="Nombre"/>
            <TextInput style={styles.input} placeholder="Apellido"/>
        </View>
        <TouchableOpacity   style={styles.btn}>
            <Text style={styles.textBtn}>Cargar foto de DNI</Text>
        </TouchableOpacity>
    </View>
  )
}
