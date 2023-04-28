import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { HistoryData } from './HistoryData';
export const Historial = () => {
  
  return (
    <View>
       <ScrollView>
       <View style={style.contentFiltro}>
        <Text style={style.title}>ÚLTIMO MES DE ACTIVIDAD</Text>
        <Text style={style.filtro}>Última fecha</Text>
       </View>
        <HistoryData/>
       </ScrollView>
      
  </View>
  )
}
const style = StyleSheet.create({
  // contentHistorial:{
  //    flex:1,
  // },
  contentFiltro:{
    alignSelf:'center',
    width:'90%',
    flexDirection:'row',
    height:80,
    justifyContent:'space-between',
    alignItems:'center'
  },
  title:{
    fontSize:16,
    color:'#49454F',
  }
})