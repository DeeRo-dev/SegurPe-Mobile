import React from 'react';
import {styles} from './ThemeMiPerfil'
import { Image, StyleSheet, Text, View } from 'react-native';
export const MiPerfil = () => {
  return (
    <View>
        <View style={styles.contImgAvatar}>
          <View style={styles.contentAvatar}>
              <Image source={{uri:"https://www.w3schools.com/howto/img_avatar.png"}}
                style={styles.avatarPerfil} />
 
         </View>
        </View>
     <View>
     
     
    </View>
    </View>
  )
}
