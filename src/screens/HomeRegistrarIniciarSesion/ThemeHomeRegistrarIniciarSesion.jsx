import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    content:{
        flex:1,
        alignItems:'center'
    },
    contentBtns:{
        marginVertical:50,
    },
    contentImg:{
        width:'100%',
        height:255,
        alignItems:'center',
        backgroundColor:'#D8E2FF',
        borderBottomEndRadius:200,
        borderBottomLeftRadius:200,
    },
    imgSegur:{
        marginTop:40
    },
    title:{
        fontSize:20,
        marginLeft:15
    },
    textTitle:{
        fontSize:20,
    },
    btnLog:{
        backgroundColor:'#F57D20',
        borderRadius:100,
        width: 382,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20
    },
    textBtn:{
        color:'#FFFFFF',
        fontSize:14
    },
    btnLogGoogle:{
        borderRadius:100,
        width: 382,
        height: 40,
        marginVertical:20,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#4285F4'
    },
    textBtnGoogle:{
        color:'#4285F4',
        fontSize:14,
        marginLeft:10
    },
})