import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';


export default function App() {
  return (
    <NavigationContainer>
      <MenuLateral/>
    </NavigationContainer>
  );
}

