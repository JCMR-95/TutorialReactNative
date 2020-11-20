import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Button, Alert, TextInput} from 'react-native'

class PantallaPrincipal extends Component {

  constructor(props){
    super(props);
    this.state = {
      nombreUsuario: " ",
      contraseña: " "
    }
  }

  confirmacion = () => { 

    if(this.state.nombreUsuario == 'Administrador'){
      if(this.state.contraseña == 'administrador'){

        Alert.alert(
          "Confirmación",
          this.state.nombreUsuario +" ¿Quieres continuar?",
          [
            {
              text: "Cancelar",
              onPress: () => console.log("Cancelar"),
              style: "cancel"
            },
            { text: "OK", 
              onPress: () => { this.props.navigation.navigate('Listado')} }
          ],
          { cancelable: false }
        );
      }else{
        Alert.alert("Contraseña incorrecta")
      }
    }else{
      Alert.alert("Nombre incorrecto")
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
          <TextInput placeholder = "Ingrese Nombre" 
                    onChangeText = { (nombreUsuario) => this.setState({nombreUsuario})}/>
          <TextInput placeholder = "Ingrese Contraseña" secureTextEntry={true}
                    onChangeText = { (contraseña) => this.setState({contraseña})}/>

          <Button title = {bienvenido} onPress = {this.confirmacion}/>

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
