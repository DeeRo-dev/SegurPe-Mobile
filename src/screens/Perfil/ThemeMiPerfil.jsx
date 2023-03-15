import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    contNameAvatar:{
        height:120,
        backgroundColor:'#C5D6FF',
        flexDirection:'row',
        alignItems:'center',
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        shadowColor:'#171717',
        shadowOffset: {width: 10, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    contentAvatar:{
        alignItems:'flex-start',
         borderBottomRadius:130,
         flexDirection:'row',
         marginLeft:23,
         shadowColor:'#171717',
        shadowOffset: {width: 10, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    pencilAvatar:{
        marginTop:55,
    },
    avatarPerfil:{
        width:75,
        height:75,
        borderRadius:100,
    },
    titleName:{
        fontSize:24,
        marginLeft:10
    },
    contentDatos:{
        width:'90%',
        alignSelf:'center',
    },
    datos:{
        marginTop:10,
        paddingVertical:5,
        borderWidth:1,
        height:56,
        borderRadius:100,
        borderColor:'#C4C6CF',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    titleDato:{
        fontSize:12,
        marginTop:30
    },
    dato:{
        fontSize:16,
        width:'75%'
    },
    contentBtnEdit:{
        alignItems:'center',
        marginTop:120
    },
    btnEdit:{
        borderRadius:100,
        width: 342,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#4285F4',
    },
    textBtn:{
        color:'#004494',
        fontSize:14
    },
    datosEdit:{
        backgroundColor:'#D8E2FF',
        marginTop:10,
        paddingVertical:5,
        borderBottomWidth:1,
        borderColor:'#C4C6CF',
        flexDirection:'row'
    },
    contentBtnEcho:{
        alignItems:'center',
        marginTop:50
    },
    btnEcho:{
        backgroundColor:'#F57D20',
        borderRadius:100,
        width: 382,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20
    },
    textBtnEcho:{
        color:'white',
        fontSize:14
    }
})