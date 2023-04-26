import React from 'react'
import { View, Text } from 'react-native'

export const ModalEmergency = () => {
  return (  
    <View style={styles.contentModal}>
        <View style={styles.contEmerDist}>
            <Text style={styles.titleEmg}>Emergencia</Text>
            <Text style={styles.titleDist}>Distancia:???</Text>
        </View>
        <View style={styles.contentImgName}>
            <Text>Img</Text>
            <View style={styles.contName}>
                <Text>Nombre</Text>
                <Text>Buscando...</Text>
            </View>
            <View style={styles.contNumPlaca}> 
                <Text>Numero de placa</Text>
                <Text>4122143</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>Cancelar búsqueda</Text>
        </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    contentModal:{},
    contEmerDist:{},
    titleEmg:{},
    titleDist:{},
    contentImgName:{},
    contName:{},
    contNumPlaca:{},
    btn:{
        borderRadius:100,
        width: 382,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#004494',
       marginTop:50
    },
    textBtn:{
        color:'#004494',
        fontSize:14
    },
})