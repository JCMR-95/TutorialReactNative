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

const AgregarAdminScreen = (props) => {

  const [state, setState] = useState({
    nombreUsuario: '',
    contrasena: ''
  });

  const handleChangeText = (value, dato) => {
    setState({ ...state, [dato]: value });
  };

  const guardarDatos = async () => {
    if (state.nombre === "" || state.contrasena === "") {
      Alert.alert("Debes ingresar los datos")
    } else {

      const cantAdmin = firebase.db.collection("Administradores").doc("CantidadAdmins")
      const doc = await cantAdmin.get();
      const cantidadAdmins = doc.data();

      var cantActualAdmin = cantidadAdmins.Cantidad + 1
      var adminID = "admin" + cantActualAdmin

      console.log(adminID)

      try {
        await firebase.db.collection("Administradores").doc(adminID).set({
          nombreUsuario: state.nombreUsuario,
          contrasena: state.contrasena
        });
        Alert.alert("Administrador Ingresado!")

        const cantRef = firebase.db.collection("Administradores").doc("CantidadAdmins");
        await cantRef.set({
          Cantidad: cantActualAdmin,
        });

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
          placeholder="Usuario"
          onChangeText={(value) => handleChangeText(value, "nombreUsuario")}
          value={state.nombreUsuario}
        />
      </View>

      <View style={styles.inputGroup}>
        < TextInput placeholder = "Ingrese Contraseña"
          placeholder="Contrasena"
          onChangeText={(value) => handleChangeText(value, "contrasena")}
          value={state.contrasena}
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

export default AgregarAdminScreen;