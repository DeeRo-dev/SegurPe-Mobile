
import React, { useRef, useState} from 'react'
import PagerView from 'react-native-pager-view';
import { View, Text, Image, TouchableOpacity,StyleSheet, ScrollView } from 'react-native'

import { Datos1 } from './Datos1';
import { Datos2 } from './Datos2';
import { Datos3 } from './Datos3';
import {styles} from './ThemeCrearCuenta';
import Ionicons from "@expo/vector-icons/Ionicons";

import { Datos4 } from './Datos4';

export const CrearCuenta = () => {
  const [activeButton, setActiveButton] = useState({
    btn1:true,
    btn2:false,
    btn3:false,
    btn4:false,
  });

  const ref = useRef();
  
  const setBtn =(btn)=>{
    // console.log(btn)
    switch (btn) {
      case  0:
        setActiveButton({
          btn1:true,
          btn2:false,
          btn3:false,
          btn4:false,
        })
       
        break;
        case 1:
        setActiveButton({
          btn1:false,
          btn2:true,
          btn3:false,
          btn4:false,
        })
        
        break;
        case  2:
        setActiveButton({
          btn1:false,
          btn2:false,
          btn3:true,
          btn4:false,
        })
        break;
        case 3:
        setActiveButton({
          btn1:false,
          btn2:false,
          btn3:false,
          btn4:true,
        })
        break;
    }
  }

  const selectBtn = (value) => {
      ref.current?.setPage(value)
     setBtn(value)
  }


 

  return (

    <View style={styles.content}>
      
    <PagerView
      style={style.viewPager}
      initialPage={0}
      ref={ref}
      onPageSelected={e => {setBtn(e.nativeEvent.position)}}
      >

      <View style={style.page} key="1">
        <Datos1 />
      </View>
      <View style={style.page}  key="2">
        <Datos4/>
      </View>
      <View style={style.page}  key="3">
        <Datos2/>
      </View>
      <View style={style.page} key="4">
        <Datos3/>
      </View>
    
    </PagerView>
    <View style={styles.contentBtnPag}>
    <TouchableOpacity  style={styles.btnPag} onPress={()=> selectBtn(0)}>
      <Text>
         <Ionicons name={activeButton.btn1 ? "radio-button-on-outline" : "radio-button-off-outline"} size={15} color="black" />
      </Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.btnPag} onPress={()=> selectBtn(1)}>
      <Text>
         <Ionicons  name={activeButton.btn2 ? "radio-button-on-outline" : "radio-button-off-outline"} size={15} color="black" />
      </Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.btnPag} onPress={()=> selectBtn(2)}>
      <Text>
      <Ionicons   name={activeButton.btn3 ? "radio-button-on-outline" : "radio-button-off-outline"} size={15} color="black" />
      </Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.btnPag} onPress={()=> selectBtn(3)}>
      <Text>
      <Ionicons  name={activeButton.btn4 ? "radio-button-on-outline" : "radio-button-off-outline"} size={15} color="black" />
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