import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, } from 'react-native'
// import { TouchableOpacity } from 'react-native';
import { Datos1 } from './Datos1';
import { Datos2 } from './Datos2';
import { Datos3 } from './Datos3';
import {styles} from './ThemeCrearCuenta';


export const CrearCuenta = () => {
  return (
    <View style={styles.content}>
      <Image style={styles.img} source={require('../../assets/Group169.png')}/>
       {/* <Datos1/>
       <Datos2/> */}
       <Datos3/>
        <View>
          
        </View>
    </View>
  )
}
