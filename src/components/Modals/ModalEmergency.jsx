import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity, Image } from 'react-native'

export const ModalEmergency = () => {
  return (  
    <View style={styles.contentModal}>
        <View style={styles.contEmerDist}>
            <Text style={styles.titleEmg}>Emergencia</Text>
            <Text style={styles.titleDist}>Distancia:???</Text>
        </View>
        <View style={styles.contentImgName}>
        <Image style={styles.img} source={{uri: "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"}}/>
            <View style={styles.contName}>
                <Text style={styles.titleName}>Nombre</Text>
                <Text style={styles.name} >Buscando...</Text>
            </View>
            <View style={styles.contNumPlaca}> 
                <Text style={styles.titleName}>Numero de placa</Text>
                <Text  style={styles.name} >4122143</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>Cancelar búsqueda</Text>
        </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    contentModal:{
        width:400,
        height:206,
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    contEmerDist:{
        width:'95%',
        marginTop:30,
        paddingHorizontal:22,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    titleEmg:{
        fontSize:32,
        fontWeight:'bold'
    },
    titleDist:{
        fontSize:12,
    },
    contentImgName:{
        width:'95%',
        paddingHorizontal:22,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    img:{
        width:40,
        height:40,
        borderRadius:100,
    },
    titleName:{
        fontSize:12,
    },
    name:{
        fontSize:22,
    },
    contNumPlaca:{},
    btn:{
        borderRadius:100,
         width: 352,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#004494',
    },
    textBtn:{
        color:'#004494',
        fontSize:14
    },
})