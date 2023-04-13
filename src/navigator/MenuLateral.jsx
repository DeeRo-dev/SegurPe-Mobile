import React, {useState} from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Home } from "../components/Home";
import { MiPerfil } from "../screens/Perfil/MiPerfil";
import { StyleSheet, Text, TouchableOpacity, View, Switch, } from "react-native";
import { Historial } from "../screens/Historial/Historial";
import { Configuracion } from "../screens/Configuracion/Configuracion";
import { Map } from "../screens/Map/Map";
import { SesionStackNavigator } from "../navigator/SesionStackNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ModalBasico } from "../components/Modals/ModalBasico";
import { useEffect } from "react";

const Drawer = createDrawerNavigator();

const menuItems = [
  // {
  //   name: "Estado",
  //   title: "Estado",
  //   icon: "Estado",
  //   component: Historial,
  // },
  {
    name: "MiPerfil",
    title: "Mí perfil",
    icon: "person-outline",
    component: MiPerfil,
  },
  {
    name: "Configuracion",
    title: "Configuración",
    icon: "settings-outline",
    component: Configuracion,
  },
  {
    name: "Mapa",
    title: "Mapa",
    icon: "md-checkmark-circle",
    component: Map,
  },
];

export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#16253A",
          width: 359,
        },
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
    
      <Drawer.Screen
        name="SesionStackNavigator"
        options={{ title: false }}
        component={SesionStackNavigator}
      />
    
      {menuItems.map((item) => (
        <Drawer.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}
    </Drawer.Navigator>
  );
};

const MenuInterno = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <DrawerContentScrollView>
      
      <View style={styles.container}>
        <MenuHeader/>
        <View style={styles.contentItemsEstado}>
        <View style={[styles.iconActDes, { backgroundColor: isEnabled ? '#CE6D22' : '#AFAFAF' }]} />
            <Text style={styles.itemTextEstado}>
                Estado {isEnabled? 'activo' : 'inactivo'}
               </Text>
       
            <View style={styles.viewDeslizar}>
               <Switch
                  trackColor={{ false: "#767577", true: 'white' }}
                  thumbColor={isEnabled ? "#CE6D22" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
           </View>
          
          
        </View>
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            title={item.title}
            iconName={item.icon}
            onPress={() => navigation.navigate(item.name)}
          />
        ))}
      </View>
      <LogoutButton />
    </DrawerContentScrollView>
  );
};

const MenuHeader = () => (
  <View style={styles.menuNav}>
    <Ionicons name="menu-outline" size={32} color="white" />
    <Text style={styles.menuNavText}>Menú</Text>
  </View>
);

const MenuItem = ({ title, iconName, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.contentItems}>
    <Text style={styles.itemText}>
      <Ionicons name={iconName} size={20} color="white" />
   {title}
    </Text>
  </TouchableOpacity>
);

const LogoutButton = () => (
  <View style={styles.contentSesion}>
    <ModalBasico
      text="Cerrar sesión"
      titleModal="¿Estás seguro que deseas cerrar sesión?"
      btn="Cerrar sesión"
    >
      <TouchableOpacity style={styles.btnSesion}>
        <Ionicons name="close-outline" size={32} color="#FFFFFF" />
      </TouchableOpacity>
    </ModalBasico>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
  },
  menuNav: {
    flexDirection: "row",
    marginBottom: 20,
  },
  menuNavText: {
    fontSize: 24,
    color: "#FFFFFF",
    flex: 1,
    textAlign: "center",
  },
  contentItems: {
    borderBottomWidth: 1,
    borderColor: "white",
    height: 60,
    justifyContent: "center",
    borderTopWidth: 2,
    borderColor: "#FFFFFF",
  },
  itemText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  contentSesion: {
    flexDirection: "row",
    height: 500,
    alignItems: "flex-end",
    width: "80%",
    alignSelf: "center",
  },
  btnSesion: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemTextSesion: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  contentItemsEstado:{
    flex:1,
    borderBottomWidth: 1,
    borderColor: "white",
    height: 60,
    justifyContent: "center",
    borderTopWidth: 2,
    borderColor: "#FFFFFF",
    textAlign:'center',
    flexDirection:'row'
  },
  viewDeslizar: {
    flex: 1,
    justifyContent: "center",
   
  },
  iconActDes: {
    width: 10,
    height: 10,
    borderRadius: 25, 
    justifyContent:'center',
    alignItems:'center',
    marginRight:5,
    alignSelf:'center'
  },
  itemTextEstado:{
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    alignSelf:'center',
  }
});



