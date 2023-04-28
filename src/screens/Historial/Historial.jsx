import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { HistoryData } from './HistoryData';
export const Historial = () => {
  
  return (
    <View>
       <ScrollView>
        <HistoryData/>
       </ScrollView>
      
  </View>
  )
}
const style = StyleSheet.create({
  contentHistorial:{
     flex:1,
     alignItems:'center',
  }
})