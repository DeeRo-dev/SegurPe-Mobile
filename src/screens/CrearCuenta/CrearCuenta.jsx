import { useNavigation } from '@react-navigation/native';
import React, {useRef, useState} from 'react'
import PagerView from 'react-native-pager-view';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import { Datos1 } from './Datos1';
import { Datos2 } from './Datos2';
import { Datos3 } from './Datos3';
import {styles} from './ThemeCrearCuenta';
import Ionicons from "@expo/vector-icons/Ionicons";
import { ModalBasico } from '../../components/Modals/ModalBasico';
import { Datos4 } from './Datos4';

export const CrearCuenta = () => {

  const [select, setSelect] = useState(0)
  const ref = useRef();

  const selectBtn = (value) => {
      setSelect(value)
      console.log(select)
      ref.current?.setPage(value)

  }

  return (

    <View style={styles.content}>
      
    <PagerView
     style={style.viewPager}
      initialPage={0}
      ref={ref}
      >
      <View style={style.page} key="1">
        <Datos1/>
      </View>
      <View style={style.page} key="2">
        <Datos4/>
      </View>
      <View style={style.page} key="3">
        <Datos2/>
      </View>
      <View style={style.page} key="4">
        <Datos3/>
      </View>
    </PagerView>
    <View style={styles.contentBtnPag}>
    <TouchableOpacity  style={styles.btnPag} onPress={()=> selectBtn(0)}>
      <Text>
         <Ionicons name="radio-button-off-outline" size={15} color="black" />
      </Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.btnPag} onPress={()=> selectBtn(1)}>
      <Text>
         <Ionicons name="radio-button-off-outline" size={15} color="black" />
      </Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.btnPag} onPress={()=> selectBtn(2)}>
      <Text>
      <Ionicons  name="radio-button-on-outline" size={15} color="black" />
      </Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.btnPag} onPress={()=> selectBtn(3)}>
      <Text>
      <Ionicons name="radio-button-on-outline" size={15} color="black" />
      </Text>
    </TouchableOpacity>
    </View>
    <View style={styles.contentBtnLog}>
    <TouchableOpacity style={styles.btnLog}>
        <Text style={styles.textBtnLog}>Crear una cuenta</Text>    
    </TouchableOpacity>
    </View>

  </View>  )
}
   

const style = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});