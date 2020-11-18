import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert
} from "react-native";

import firebase from "./database/firebase";

const FormularioScreen = (props) => {

  const [state, setState] = useState({
    nombre: '',
    correo: '',
    telefono: ''
  });

  const handleChangeText = (value, dato) => {
    setState({ ...state, [dato]: value });
  };

  const guardarDatos = async () => {
    if (state.nombre === "") {
      Alert.alert("Debes ingresar un Nombre")
    } else {

      try {
        await firebase.db.collection("users").add({
          nombre: state.nombre,
          correo: state.correo,
          telefono: state.telefono,
        });
        Alert.alert("Dato Ingresado!")
        props.navigation.navigate('Listado')

      } catch (error) {
        console.log(error)
      }
    }
  };

  return(

    <ScrollView style={styles.container}>

      <View style={styles.inputGroup}>
        < TextInput placeholder = "Ingrese Nombre"
          placeholder="Nombre"
          onChangeText={(value) => handleChangeText(value, "nombre")}
          value={state.nombre}
        />
      </View>

      <View style={styles.inputGroup}>
        < TextInput placeholder = "Ingrese Correo"
          placeholder="Correo"
          onChangeText={(value) => handleChangeText(value, "correo")}
          value={state.correo}
        />
      </View>

      <View style={styles.inputGroup}>
        < TextInput placeholder = "Ingrese Teléfono"
          placeholder="Telefono"
          onChangeText={(value) => handleChangeText(value, "telefono")}
          value={state.telefono}
        />
      </View>

      <View style={styles.button}>
        <Button title ="Guardar Datos" onPress = {() => guardarDatos()}/>
      </View>
      
    </ScrollView>
    
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FormularioScreen;