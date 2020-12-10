import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Button, Alert, TextInput} from 'react-native'
import firebase from "./database/firebase";

class PantallaPrincipal extends Component {

  constructor(props){
    super(props);
    this.state = {
      nombreUsuario: " ",
      contrasena: " "
    }
  }

  confirmacion = async() => { 

    const obtenerCantAdmins = firebase.db.collection("Administradores").doc("CantidadAdmins")
    const getDoc = await obtenerCantAdmins.get();
    const cantAdmins = getDoc.data();

    var nombreCorrecto = false
    var contrasenaCorrecta = false

    for (var i = 1; i <= cantAdmins.Cantidad; i++) {
      
      var ID = "admin" + i
      const obtenerAdmin = firebase.db.collection("Administradores").doc(ID)
      const doc = await obtenerAdmin.get();
      const administradores = doc.data();

      if(this.state.nombreUsuario == administradores.nombreUsuario){
        var nombreCorrecto = true
        if(this.state.contrasena == administradores.contrasena){
          var contrasenaCorrecta = true
        }
      }
      if(nombreCorrecto == true && contrasenaCorrecta == true){
        break
      }
    }


    if(nombreCorrecto == true && contrasenaCorrecta == true){

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
      Alert.alert("Usuario o Contraseña incorrecta")
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
                    onChangeText = { (contrasena) => this.setState({contrasena})}/>

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
