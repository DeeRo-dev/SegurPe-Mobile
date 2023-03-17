import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

export const ModalBasico= () => {
  
  const createTwoButtonAlert = () =>
    Alert.alert('¿Estás seguro que deseas cerrar sesión?', '', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'Cancel',
        
      },
      {text: 'Cerrar sesión', onPress: () => console.log('OK Pressed')},
    ]);

  // const createThreeButtonAlert = () =>
  //   Alert.alert('Alert Title', 'My Alert Msg', [
  //     {
  //       text: 'Ask me later',
  //       onPress: () => console.log('Ask me later pressed'),
  //     },
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel',
  //     },
  //     {text: 'OK', onPress: () => console.log('OK Pressed')},
  //   ]);

  // return (
  //   <View style={styles.container}>
      
  //     <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
  //     {/* <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} /> */}
  //   </View>
  // );

return createTwoButtonAlert()
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

