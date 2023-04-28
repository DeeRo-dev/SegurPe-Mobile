import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { dataFake } from './dataFake';


export const HistoryData = () => {
    
    const lista = dataFake.map((dato) => {
      return (
        <View style={style.contentData} key={dato.address}>
            <View style={style.contentIcon}>
                <Text>Icono</Text>
            </View>
            <View style={style.contentName}>
                 <Text style={style.direc}>{dato.address}</Text>
                 <Text style={style.name}>{dato.name}</Text></View>
            <View  style={style.contentFecha}> 
                <Text style={style.fechaData}>{dato.fecha.toDateString()}</Text>
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
    },
    contentIcon:{
        flex:1,
    },
    contentName:{
        flex:2,
    },
    direc:{
        color:'#1C1B1F',
        fontSize:16,
    },
    name:{
        color:'#49454F',
        fontSize:14,
        
    },
    contentFecha:{
        flex:1
    },
    fechaData:{
        color:'#49454F',
        fontSize:11,
    }
})