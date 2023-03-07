import React  ,{ useState }from 'react'
import {styles} from './ThemeCrearCuenta'
import { View,Text, TouchableOpacity, TextInput } from 'react-native'
import { CheckBox } from 'react-native-elements';

export const Datos3 = () => {
    
        const [isChecked, setIsChecked] = useState(false);
      
        const handleCheckboxChange = () => {
          setIsChecked(!isChecked);
        };
  return (
    <View style={styles.contentTerminosCondiciones}>
       <Text style={styles.titleCondiciones}>Términos y condiciones</Text>
       <View>
            <View>
                 <Text style={styles.subTitleCondiciones}>Privacidad</Text>
                 <Text style={styles.parrafoCondiciones}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure.</Text>
            </View>
            <View>
                 <Text style={styles.subTitleCondiciones}>Cuentas</Text>
                 <Text style={styles.parrafoCondiciones}>ute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim</Text>
            </View>
       </View>
       <CheckBox
        title='Acepto los términos y condiciones'
        checked={isChecked}
        onPress={handleCheckboxChange}
        checkedColor={'#000000'}
        containerStyle={{backgroundColor:'transparent', borderWidth:0}}
      />
    </View>
  )
}
