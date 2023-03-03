import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/components/Home';
import { MenuLateral } from './src/navigator/MenuLateral';


export default function App() {
  return (
    <NavigationContainer>
      {/* <Home/> */}
      <MenuLateral/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'blue' 
   },
});
