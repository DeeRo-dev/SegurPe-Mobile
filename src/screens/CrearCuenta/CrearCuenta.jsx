import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, } from 'react-native'
// import { TouchableOpacity } from 'react-native';
import { Datos1 } from './Datos1';
import { Datos2 } from './Datos2';
import { Datos3 } from './Datos3';
import {styles} from './ThemeCrearCuenta';


export const CrearCuenta = () => {

  const [pagina, setPagina] = useState()



    const paginacion = (data) =>{
      console.log(data)
   if (!data) {
      return <Datos1/>
   } else {
    switch (data) {
      case data === 'data1':
        return ( <Datos1/>)
      case data === 'data2':
        return ( <Datos2/>)
      case data === 'data3':
        return ( <Datos3/>)
     }
   }
    }

  return (
    <View style={styles.content}>
      <Image style={styles.img} source={require('../../assets/Group169.png')}/>
       
        { 
          paginacion(pagina)
        }
        <View style={styles.contentBtnPagination}>
          <TouchableOpacity onPress={() => {setPagina('data1')}} >
            <Text style={styles.textBtnPag}>A</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => {setPagina('data2')}}>
            <Text style={styles.textBtnPag}>B</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setPagina('data3')}} >
            <Text style={styles.textBtnPag}>C</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
