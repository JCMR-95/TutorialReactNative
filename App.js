import React from 'react'
import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PantallaPrincipal from './PantallaPrincipal'
import FormularioScreen from './FormularioScreen';
import ListadoScreen from './ListadoScreen';
import DetallesScreen from './DetallesScreen';
import AgregarAdminScreen from './AgregarAdminScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Bienvenido" component={PantallaPrincipal} />
          <Stack.Screen name="Listado" component={ListadoScreen} />
          <Stack.Screen name="Formulario" component={FormularioScreen} />
          <Stack.Screen name="Detalles" component={DetallesScreen} />
          <Stack.Screen name="AgregarAdmin" component={AgregarAdminScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;