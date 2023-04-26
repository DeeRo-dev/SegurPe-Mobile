import React from 'react'
import { View,Text } from 'react-native'
import {styles} from './ThemeHome';
import { ModalEmergency } from '../../components/Modals/ModalEmergency';
export const Vista1 = () => {
  return (
    <View>
        <Text style={styles.title} >Nos alegra que pruebes nuestra app</Text>
        <Text style={styles.parrafo}>Aquí podrás tener una comunicación directa con el serenazgo mas cercano a tí</Text>
    </View>
  )
}
