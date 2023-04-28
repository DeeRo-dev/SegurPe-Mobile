import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { dataFake } from './dataFake';


export const HistoryData = () => {
    const lista = dataFake.map((dato) => {
      return (
        <View style={style.contentData} key={dato.address}>
            <View>
                <Text>Icono</Text>
            </View>
            <View>
                 <Text>{dato.address}</Text>
                 <Text>{dato.name}</Text></View>
            <View> 
                <Text>{dato.fecha.toDateString()}</Text>
            </View>
         
         
        </View>
      );
    });
  
    return <View>{lista}</View>;
  };
  
const style = StyleSheet.create({
    contentData:{
        width:'90%',
        height:51,
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'center',
        borderBottomWidth:1,
        borderBottomColor:'#CAC4D0'
    }
})