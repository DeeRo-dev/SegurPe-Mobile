import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react'
import PagerView from 'react-native-pager-view';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import { Datos1 } from './Datos1';
import { Datos2 } from './Datos2';
import { Datos3 } from './Datos3';
import {styles} from './ThemeCrearCuenta';


export const CrearCuenta = () => {


  return (

    <View style={styles.content}>
       <Image style={styles.img} source={require('../../assets/Group169.png')}/>
    <PagerView style={style.viewPager} initialPage={0}>
      <View style={style.page} key="1">
        <Datos1/>
      </View>
      <View style={style.page} key="2">
        <Datos2/>
      </View>
      <View style={style.page} key="3">
        <Datos3/>
      </View>
    </PagerView>
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