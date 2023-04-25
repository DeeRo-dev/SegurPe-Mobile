import React from 'react'
import { View, Text, TouchableOpacity  } from 'react-native'
import { styles } from './ThemeBtns'


export const BtnEmergency = () => {

  return (
    <TouchableOpacity>
    <View style={styles.contentBtnEmergency}>
        <Text tyle={styles.textBtnEmergency}>Emergencia</Text>
    </View>
    </TouchableOpacity>
  )
}
