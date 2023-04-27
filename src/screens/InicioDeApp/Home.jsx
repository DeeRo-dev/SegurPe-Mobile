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
import { Pagination } from '../../components/Pagination/Pagination';



export const HomeOnboarding = () => {
const [select, setSelect] = useState(0)
  const ref = useRef();

  // ESTADO Y SWICHT PARA MOSTRAR EN QUE PAGINA DEL PAGINADO ESTA EL USUARIO
  // const [activeButton, setActiveButton] = useState({
  //   btn1:true,
  //   btn2:false,
  //   btn3:false,
  //   btn4:false,
  // });


  // const setBtn =(btn)=>{
  //   switch (btn) {
  //     case  0:
  //       setActiveButton({
  //         btn1:true,
  //         btn2:false,
  //         btn3:false,
  //         btn4:false,
  //       })
       
  //       break;
  //       case 1:
  //       setActiveButton({
  //         btn1:false,
  //         btn2:true,
  //         btn3:false,
  //         btn4:false,
  //       })
        
  //       break;
  //       case  2:
  //       setActiveButton({
  //         btn1:false,
  //         btn2:false,
  //         btn3:true,
  //         btn4:false,
  //       })
  //       break;
  //       case 3:
  //       setActiveButton({
  //         btn1:false,
  //         btn2:false,
  //         btn3:false,
  //         btn4:true,
  //       })
  //       break;
  //   }
  // }
  // const selectBtn = (value) => {
  //     setSelect(value)
  //     console.log(select)
  //     ref.current?.setPage(value)

  // }

  return (

    <View style={styles.content}>
         <View style={styles.contentImg}>
      <Image style={styles.imgSegur} source={require('../../assets/SegurPe.png')}/>
    </View>
    <Pagination/>

      {/* <View style={styles.contentBtnPag}>
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
    </View> */}
    
    
       
    <PagerView
     style={style.viewPager}
      initialPage={0}
      ref={ref}
      // onPageSelected={e => {setBtn(e.nativeEvent.position)}}
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
    width:'90%',
    marginLeft:20,
    marginTop:50,
    alignItems: 'center',
  },
});

