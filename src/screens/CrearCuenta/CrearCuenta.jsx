
import React, { useRef, useState,useContext} from 'react'
import PagerView from 'react-native-pager-view';
import { View, Text, Image, TouchableOpacity,StyleSheet, ScrollView } from 'react-native'
import { Datos1 } from './Datos1';
import { Datos2 } from './Datos2';
import { Datos3 } from './Datos3';
import {styles} from './ThemeCrearCuenta';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Datos4 } from './Datos4';
import { UsuarioProvider, DataExtraProvider} from '../../contextCrearUsuario/CrearUsuarioContext';
import { Pagination } from '../../components/Pagination/Pagination';


export const CrearCuenta = () => {
  const [page, setPage] = useState(0)
  const ref = useRef();

const actPage = (data)=>{
  ref.current?.setPage(data)
  setPage(data)
}
  return (

    <View style={styles.content}>
    <AppState>
      <ExtraDataState>
    <PagerView
      style={style.viewPager}
      initialPage={0}
      ref={ref}
      onPageSelected={e => {setPage(e.nativeEvent.position)}}
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
    </ExtraDataState>
    </AppState>
    <View style={styles.contentBtnPag}>
      <Pagination valuePage={page} actPage={actPage}/>
    </View>
    

  </View>  )
}

export const AppState = ({children}) => {
  return(
    <UsuarioProvider>
      {children}
    </UsuarioProvider>
  )
}
export const ExtraDataState = ({children}) => {
  return(
    <DataExtraProvider>
      {children}
    </DataExtraProvider>
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