import React  ,{ useState,useContext }from 'react'
import {styles} from './ThemeCrearCuenta'
import { View,Text, ScrollView, TextInput } from 'react-native'
import { CheckBox } from 'react-native-elements';
import { UsuarioContext } from '../../contextCrearUsuario/CrearUsuarioContext';

export const Datos3 = () => {

  const [login, loginAction] = useContext(UsuarioContext)
// Funcion para cargar en el estado global los datos de los inputs
  const onChangeData = (name, value)=>{
    loginAction({
      type: name,
      data: value
    })
    
}
    const [isChecked, setIsChecked] = useState(false);
      
    const handleCheckboxChange = (name) => {
       setIsChecked(!isChecked);
       onChangeData(name, !isChecked)
     };
  return (
    <View style={styles.contentTerminosCondiciones}>
       <ScrollView>
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
        onPress={() => {handleCheckboxChange('terminos')}}
        // onChangeText={(value)=>onChangeData('email', value)}
        checkedColor={'#000000'}
        containerStyle={{backgroundColor:'transparent', borderWidth:0}}
      />
       </ScrollView>
    </View>
  )
}
