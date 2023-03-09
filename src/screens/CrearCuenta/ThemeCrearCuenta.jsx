import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    content:{
        flex:1,
        textAlign:'center'
    },
    img:{
         alignSelf:'center',
          marginVertical:10
    },
    contentBtnPagination:{
        flexDirection:'row',
        backgroundColor:'red',
        width:100,
        justifyContent:'space-between',
        marginTop:10
    },
    textBtnPag:{
    },
    input:{
        backgroundColor:'#D8E2FF',
        borderBottomWidth:1,
        width: 382,
        height: 56,
        marginVertical:10,
    },
    btn:{
        borderRadius:100,
        width: 382,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#004494',
        marginTop:15
    },
    textBtn:{
        color:'#004494',
        fontSize:14
    },
    contentTerminosCondiciones:{
        width:'90%',
    },
    titleCondiciones:{
        fontSize:24,
        fontWeight: 'bold',
       
    },
    subTitleCondiciones:{
        fontSize:20,
        fontWeight: 'bold',
        marginVertical:10
    },
    parrafoCondiciones:{
        fontSize:16
    },
    conteinerTextCam:{
        marginTop:10
    },
    titleTextCam:{
        fontSize:16
    },
    parrafoTextCam:{
        fontSize:12
    },
})