import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { MenuLateral } from '../../navigator/MenuLateral';
import { InicioStackNavigator } from '../../navigator/InicioStackNavigator';
import { AuthContext } from '../../contextCrearUsuario/AuthContext';
import { useContext } from 'react';


export default function Incio() {  
 const [date, dateAction] = useContext(AuthContext);  

  return (
    <NavigationContainer>  
    
       {date.status === "not-authenticated" ?  (
           <InicioStackNavigator/>
        )
        : ( 
               
            <MenuLateral/> 
        )
       }
         
    </NavigationContainer>
  );
}

