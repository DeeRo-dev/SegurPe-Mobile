import React from 'react'
import { View, Text, TouchableOpacity  } from 'react-native'
import { styles } from './ThemeBtns'

export const BtnPrevetion = () => {

  return (
    <TouchableOpacity>
    <View style={styles.contentBtnPrevention}>
        <Text style={styles.textBtnPrevention}>Prevetion</Text>
    </View>
    </TouchableOpacity>
  )
}
