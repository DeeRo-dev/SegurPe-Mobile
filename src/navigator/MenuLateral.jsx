import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Home } from "../components/Home";
import { MiPerfil } from "../screens/Perfil/MiPerfil";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Historial } from "../screens/Historial/Historial";
import { Configuracion } from "../screens/Configuracion/Configuracion";
import { Map } from "../screens/Map/Map";
import { SesionStackNavigator } from "../navigator/SesionStackNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ModalBasico } from "../components/Modals/ModalBasico";

const Drawer = createDrawerNavigator();
//Navegaciones del menu lateral
export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#16253A",
          width:359
        },
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      {/* <Drawer.Screen name="Home" component={Home} /> */}
      {/* <Drawer.Screen name="Map" component={Map} /> */}
     <Drawer.Screen name="SesionStackNavigator" options={{title:false}} component={SesionStackNavigator} /> 
      <Drawer.Screen name="MiPerfil" component={MiPerfil} />
      <Drawer.Screen name="Historial" component={Historial} />
      <Drawer.Screen name="Configuracion" component={Configuracion} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}) =>{
  return (
    <DrawerContentScrollView>
      <View style={style.conteiner}>
         <View style={style.menuNav}>
            <Ionicons name="menu-outline" size={32} color="white" />
            <Text style={style.menuNavText}>Menú</Text>  
         </View>

          <View>
          <View style={style.contentItems}>
             <TouchableOpacity 
              onPress={() => navigation.navigate("MiPerfil")}
             >
               <Text style={style.itemText}><Ionicons name="person-outline" size={20} color="white" />   Mí perfil</Text>
             </TouchableOpacity>
             </View>
             <View style={style.contentItems}>
               <TouchableOpacity 
                onPress={() => navigation.navigate("Historial")}
               >  
                <Text style={style.itemText}><Ionicons name="time-outline" size={20} color="white" />   Historial de actividad</Text>
             </TouchableOpacity>
             </View>
            <View style={{...style.contentItems, borderBottomWidth:2}}>
              <TouchableOpacity 
                onPress={() => navigation.navigate("Configuracion")}
              >
               <Text style={style.itemText}><Ionicons name="settings-outline" size={20} color="white" />   Configuración</Text>
             </TouchableOpacity>
            </View>
             
         </View>
      
      </View>   
      <View style={style.contentSesion}>
        <ModalBasico 
        text='Cerrar sesión'
         titleModal='¿Estás seguro que deseas cerrar sesión?' 
         btn='Cerrar sesión'> 
       <TouchableOpacity style={style.btnSesion} >
            <Ionicons name="close-outline" size={32} color="#FFFFFF" />
             
          </TouchableOpacity> 
          </ModalBasico > 
    
      </View>
    </DrawerContentScrollView>
   
  
  )

}

const style = StyleSheet.create({
  conteiner:{
    flex: 1,
    width:'80%',
    alignSelf:'center',
  },
  menuNav:{
    flex:1,
    flexDirection:'row',
    // justifyContent:'space-between',
    marginBottom:20,
  },
  menuNavText:{
    fontSize:24,
    color:'#FFFFFF',
    flex:1,
    textAlign:'center'
  },
  contentItems:{
    borderWidthBottom:1,
    borderColor:'white',
    height:60,
    justifyContent:'center',
    borderTopWidth: 2,
    borderColor:'#FFFFFF'
  },
  itemText:{
    color:'#FFFFFF',
    fontSize:16,
  },
  contentSesion:{
    flexDirection:'row',
    height:500,
    alignItems:'flex-end',
    width:'80%',
    alignSelf:'center',
    
  },
  btnSesion:{
    flexDirection:'row',
    alignItems:'center',
  },
  itemTextSesion:{
    color:'#FFFFFF',
    fontSize:16
  }
})