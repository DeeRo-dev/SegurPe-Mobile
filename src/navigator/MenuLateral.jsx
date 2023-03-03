import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../components/Home';
import { Configuracion } from '../screens/Configuracion';
import { Historial } from '../screens/Historial';
import { MiPerfil } from '../screens/MiPerfil';

const Drawer = createDrawerNavigator();

export const MenuLateral = ()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="MiPerfil" component={MiPerfil} />
      <Drawer.Screen name="Historial" component={Historial} />
      <Drawer.Screen name="Configuracion" component={Configuracion} />

    </Drawer.Navigator>
  );
}