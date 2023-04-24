import { useNavigation } from '@react-navigation/native';
import React, {useRef, useState} from 'react'
import PagerView from 'react-native-pager-view';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import { Vista1 } from './Vista1';
import { Vista2 } from './Vista2';
import { Vista3 } from './Vista3';
import {styles} from './ThemeHome';
import Ionicons from "@expo/vector-icons/Ionicons";
import { ModalBasico } from '../../components/Modals/ModalBasico';
import { Vista4 } from './Vista4';

export const HomeOnboarding = () => {

  const [select, setSelect] = useState(0)
  const ref = useRef();

  const selectBtn = (value) => {
      setSelect(value)
      console.log(select)
      ref.current?.setPage(value)

  }

  return (

    <View style={styles.content}>
         <View style={styles.contentImg}>
         <Image style={styles.imgSegur} source={require('../../assets/SegurPe.png')}/>
      </View>


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
    
       
    <PagerView
     style={style.viewPager}
      initialPage={0}
      ref={ref}
      >
      <View style={style.page} key="1">
         <Vista1/> 
      </View>
      <View style={style.page} key="2">
        <Vista2/>
      </View>
      <View style={style.page} key="3">
       <Vista3/> 
      </View>
      <View style={style.page} key="4">
       <Vista4/> 
      </View>
    </PagerView> 
   
  </View>  
  )
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

