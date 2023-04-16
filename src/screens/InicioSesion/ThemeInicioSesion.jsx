import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    content:{
        flex:1,
        height:400,
        alignItems:'center',
    },
 
    img:{
          marginVertical:40
    },
    titleInput:{
        fontSize:12,
        marginLeft:22,
        marginTop:50,
    },
    input:{
        width: 382,
        height: 56,
        marginVertical:10,
        paddingVertical:5,
        borderBottomWidth:2,
        borderRadius:100,
        borderColor:'#C4C6CF',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#D8E2FF',
        paddingLeft:22,
    },
    btn:{
        backgroundColor:'#F57D20',
        borderRadius:100,
        width: 382,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        marginTop:280,
        
    },
    textBtn:{
        color:'#FFFFFF',
        fontSize:14
    },
    bkColorListo:{backgroundColor:'#F57D20'},
    bkColorNoListo:{backgroundColor:'#D5DBDB'},
})