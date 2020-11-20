import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator
} from "react-native";
import firebase from "./database/firebase";

const DetallesScreen = (props) => {

  const initialState = {
    id: '',
    nombre: '',
    correo: '',
    telefono: ''
  };

  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const handleChangeText = (value, dato) => {
    setUser({ ...user, [dato]: value });
  };

  const obtenerUser = async(id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({ ...user, id: doc.id });
    setLoading(false);
  }

  const borrarUser = async () => {
    setLoading(true)
    const dbRef = firebase.db
      .collection("users")
      .doc(props.route.params.userId);
    await dbRef.delete();
    setLoading(false)
    props.navigation.navigate("Listado");
  };

  const confirmacionAlerta = () => {
    Alert.alert(
      "Borrar Usuario",
      "¿Estás seguro de borrar este Usuario?",
      [
        { text: "Sí", onPress: () => borrarUser() },
        { text: "No", onPress: () => Alert.alert("Usuario no eliminado") },
      ],
      {
        cancelable: true,
      }
    );
  };

  const actualizarUser = async () => {
    const userRef = firebase.db.collection("users").doc(user.id);
    await userRef.set({
      nombre: user.nombre,
      correo: user.correo,
      telefono: user.telefono,
    });
    setUser(initialState);
    props.navigation.navigate("Listado");
  };

  useEffect(() => {
    obtenerUser(props.route.params.userId)
  }, [])

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }


  return (
    <ScrollView style={styles.container}>

      <View style={styles.inputGroup}>
        < TextInput placeholder = "Ingrese Nombre"
          placeholder="Nombre"
          value={user.nombre}
          onChangeText={(value) => handleChangeText(value, "nombre")}
        />
      </View>

      <View style={styles.inputGroup}>
        < TextInput placeholder = "Ingrese Correo"
          placeholder="Correo"
          value={user.correo}
          onChangeText={(value) => handleChangeText(value, "correo")}
        />
      </View>

      <View style={styles.inputGroup}>
        < TextInput placeholder = "Ingrese Teléfono"
          placeholder="Telefono"
          value={user.telefono}
          onChangeText={(value) => handleChangeText(value, "telefono")}
        />
      </View>

      <View style={styles.button}>
        <Button color = "green" title ="Actualizar Datos" onPress = {() => actualizarUser()}/>
        <Button color = "red" title ="Eliminar Usuario" onPress = {() => confirmacionAlerta()}/>
      </View>
      
    </ScrollView>
  );
  
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

export default DetallesScreen;