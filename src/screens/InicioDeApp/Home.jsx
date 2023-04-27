import React, {useRef, useState} from 'react'
import PagerView from 'react-native-pager-view';
import { View,  Image,StyleSheet } from 'react-native'
import { Vista1 } from './Vista1';
import { Vista2 } from './Vista2';
import { Vista3 } from './Vista3';
import {styles} from './ThemeHome';
import { Vista4 } from './Vista4';
import { Pagination } from '../../components/Pagination/Pagination';


export const HomeOnboarding = () => {
const [page, setPage] = useState(0)
  const ref = useRef();

const actPage = (data)=>{
  ref.current?.setPage(data)
  setPage(data)
}
  return (

    <View style={styles.content}>
         <View style={styles.contentImg}>
      <Image style={styles.imgSegur} source={require('../../assets/SegurPe.png')}/>
    </View>
      {/* PAGINACION: ENVIAR LOS DATOS EN LA PAGINA QUE ESTA, 
      Y FUNCION PARA SETEAR DESDE EL COMPONENTE PAGINATION LOS DATOS. */}
       <View style={style.contentBtnPag}>
              <Pagination valuePage={page} actPage={actPage}/>
       </View>
    <PagerView
     style={style.viewPager}
      initialPage={0}
      ref={ref}
      onPageSelected={e => {setPage(e.nativeEvent.position)}}
      >
      <View style={style.page} key="0">
         <Vista1/> 
      </View>
      <View style={style.page} key="1">
        <Vista2/>
      </View>
      <View style={style.page} key="2">
       <Vista3/> 
      </View>
      <View style={style.page} key="3">
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
  contentPag:{
    // backgroundColor:'red',
    marginTop:50,
    marginLeft:15
},
});

