import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { MenuLateral } from '../../navigator/MenuLateral';
import { InicioStackNavigator } from '../../navigator/InicioStackNavigator';
import { AuthContext } from '../../contextCrearUsuario/AuthContext';
import { useContext } from 'react';
import { getUserToken } from '../../helpers/store';
import { TOKEN } from '../../helpers/const';
import { LoadingScreen } from '../Loading/LoadingScreen';


export default function Incio() {  
 const [date, dateAction] = useContext(AuthContext);  
   // State para saber si hay que mostrar el loading y esperar que recupere los datos del storage
const [value, setValue] = useState({
  token:false,
  loading:true,
})

const getAction = async ()=> {
  const data = await getUserToken(TOKEN)
  
  if (data && value.token === false) {
    console.log(data, 'entra:?')
    setValue({
      ...value,
      token: true,
      loading:false
    })
   }else if(!data && value.token === true){
    setValue({
      ...value,
      token: false,
      loading:false
    })
   }
 
}

getAction()
// Loading para esperar los datos
useEffect(() => {
  const timeoutId = setTimeout(() => {
    setValue({
      ...value,
      loading:false
    })
  }, 4000);

  return () => {
    clearTimeout(timeoutId);
  };
}, []);

if (value.loading === true) {
  return <LoadingScreen/>
}
console.log(value.token)
  return (
    <NavigationContainer>  
    
       {value.token === false?  (
           <InicioStackNavigator/>
        )
        : ( 
               
            <MenuLateral/> 
        )
       }
         
    </NavigationContainer>
  );
}

