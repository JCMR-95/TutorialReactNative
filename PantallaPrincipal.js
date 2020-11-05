import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Button, Alert, TextInput} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DetalleScreen from './DetalleScreen';

class PantallaPrincipal extends Component {

  constructor(props){
    super(props);
    this.state = {
      nombreUsuario: " "
    }
  }

  saludo = () => { 

    if(this.state.nombreUsuario != ' '){

      Alert.alert(
        "Confirmación",
        this.state.nombreUsuario +" ¿Quieres continuar?",
        [
          {
            text: "Cancelar",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", 
            onPress: () => { this.props.navigation.navigate('Formulario')} }
        ],
        { cancelable: false }
      );

    }else{
      Alert.alert("Debe ingresar un Nombre")
    }
    
  }

  render() {

    let {nombreUsuario} = this.state;
    const bienvenido = "Bienvenido ";

    return (
      <View style = {styles.container}>

        <View style = {styles.header}>
         
          <View style = {styles.headerLeft}>
            <View style = {styles.centerLogo}>
              <Image source = {require('./assets/Estrella.png')} style ={styles.logo} />
            </View>
          </View>

          <View style = {styles.headerRight}>
          </View>

        </View>

        <View style = {styles.body}>
          <TextInput placeholder = "¿Cuál es su Nombre?" 
                    onChangeText = { (nombreUsuario) => this.setState({nombreUsuario})}/>

          <Button title = {bienvenido + nombreUsuario} onPress = {this.saludo}/>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column'
  },
  header : {
    flex: 1,
    flexDirection: 'row'
  },
  headerLeft : {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerRight : {
    flex: 1.5,
    backgroundColor: 'white'
  },
  body : {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo : {
    width: 100,
    height: 100
  },
  centerLogo : {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default PantallaPrincipal;
