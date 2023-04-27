import React,{useEffect, useRef, useState} from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";


export const Pagination = ( {valuePage, actPage}) => {
    const [select, setSelect] = useState(0)
    const ref = useRef();

    // ESTADO Y SWICHT PARA MOSTRAR EN QUE PAGINA DEL PAGINADO ESTA EL USUARIO
  const [activeButton, setActiveButton] = useState({
    btn1:true,
    btn2:false,
    btn3:false,
    btn4:false,
  });
console.log(select,'selec')
  const setBtn =(btn)=>{
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
//   Cuando se presiona el btn
  const selectBtn = (value) => {
    setSelect(value)
    setBtn(value)
     actPage(value)
   }

useEffect(()=>{
    setBtn(valuePage)
    setSelect(valuePage)
},[valuePage])
  
  return (
    <View style={styles.contentBtnPag}>
    <TouchableOpacity  style={styles.btnPag} onPress={()=> selectBtn(0)}>
      
         <Ionicons name={activeButton.btn1 ? "radio-button-on-outline" : "radio-button-off-outline"} size={15} color="black" />
     
    </TouchableOpacity>
    <TouchableOpacity  style={styles.btnPag} onPress={()=> selectBtn(1)}>
      
         <Ionicons  name={activeButton.btn2 ? "radio-button-on-outline" : "radio-button-off-outline"} size={15} color="black" />
   
    </TouchableOpacity>
    <TouchableOpacity  style={styles.btnPag} onPress={()=> selectBtn(2)}>
     
      <Ionicons   name={activeButton.btn3 ? "radio-button-on-outline" : "radio-button-off-outline"} size={15} color="black" />
    
    </TouchableOpacity>
    <TouchableOpacity  style={styles.btnPag} onPress={()=> selectBtn(3)}>
      
      <Ionicons  name={activeButton.btn4 ? "radio-button-on-outline" : "radio-button-off-outline"} size={15} color="black" />
      
    </TouchableOpacity>
    </View>
  )
}


 const styles = StyleSheet.create({
    contentBtnPag:{
        flexDirection:'row',
    },
    btnPag:{
        marginLeft:10
    },
 
})
