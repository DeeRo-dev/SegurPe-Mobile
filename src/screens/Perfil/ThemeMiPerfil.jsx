import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    contImgAvatar:{
        height:260,
    },
    contentAvatar:{
        alignItems:'center',
        height:150,
         backgroundColor:'#C5D6FF',
         borderBottomRadius:130
         
    },
    avatarPerfil:{
        width:150,
        height:150,
        borderRadius:100,
        marginTop:80
    },
    contentDatos:{
        width:'90%',
        alignSelf:'center',
    },
    datos:{
        marginTop:20,
        paddingVertical:5,
        borderBottomWidth:1,
        borderColor:'#C4C6CF',
    },
    titleDato:{
        fontSize:12,
    },
    dato:{
        fontSize:24,
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
        marginTop:20,
        paddingVertical:5,
        borderBottomWidth:1,
        borderColor:'#C4C6CF',
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