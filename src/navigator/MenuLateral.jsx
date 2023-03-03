import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Home } from '../components/Home';
import { MiPerfil } from '../screens/Perfil/MiPerfil';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Historial } from '../screens/Historial/Historial';
import { Configuracion } from '../screens/Configuracion/Configuracion';
import Ionicons from '@expo/vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
//Navegaciones del menu lateral
export const MenuLateral = ()=> {
  return (
    <Drawer.Navigator 
    screenOptions={{
      drawerStyle: {
        backgroundColor: 'black',
       
      },
    }}
       drawerContent={(props) => <MenuInterno {...props}/>}
    >
      {/* <Drawer.Screen name="Home" component={Home} /> */}
      <Drawer.Screen name="MiPerfil" component={MiPerfil} />
      <Drawer.Screen name="Historial" component={Historial} />
      <Drawer.Screen name="Configuracion" component={Configuracion} />
    </Drawer.Navigator>
  );
}

const MenuInterno = (props) =>{
  return (
    <DrawerContentScrollView>
      <View style={style.conteiner}>
         <View style={style.menuNav}>
            <Ionicons name="menu-outline" size={32} color="white" />
            <Text style={style.menuNavText}>Menu</Text>  
            <TouchableOpacity>
            <Ionicons name="chevron-back-outline" size={32} color="white" />
           </TouchableOpacity>
         </View>

          <View>
          <View style={style.contentItems}>
             <TouchableOpacity>
             <Ionicons name="person-circle-outline" size={32} color="white" />
               <Text style={style.itemText}>Mi Perfil</Text>
             </TouchableOpacity>
             </View>
             <View style={style.contentItems}>
               <TouchableOpacity>  
                <Ionicons name="time-outline" size={32} color="white" />
               <Text style={style.itemText}>Historial de actividad</Text>
             </TouchableOpacity>
             </View>
            <View style={style.contentItems}>
              <TouchableOpacity>
              <Ionicons name="settings-outline" size={32} color="white" />
               <Text style={style.itemText}>Configuracion</Text>
             </TouchableOpacity>
            </View>
             
         </View>
      
      </View>   
      <View style={style.contentSesion}>
            
          <TouchableOpacity>
             <Ionicons name="close-outline" size={32} color="red" />
             <Text style={style.itemText} >Cerrar sesion</Text>  
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
   
  
  )

}

const style = StyleSheet.create({
  conteiner:{
    backgroundColor:'red',
    flex: 1,
    width:'80%',
    alignSelf:'center'
  },
  menuNav:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
  },
  menuNavText:{
    fontSize:24,
    color:'white'
  },
  contentItems:{
    borderWidthBottom:1,
    borderColor:'white',
    // backgroundColor:'blue',
    height:60,
    justifyContent:'center',
    flexDirection:'row'
  },
  itemText:{
    color:'white',
    fontSize:14,
  },
  contentSesion:{
    flexDirection:'row',
    backgroundColor:'blue',
    height:500,
    alignItems:'flex-end',
    justifyContent:'center',
    width:'80%',
    alignSelf:'center',
  }
})

