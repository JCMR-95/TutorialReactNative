import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  Alert
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import firebase from "./database/firebase";

const ListadoScreen = (props) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { nombre, correo, telefono } = doc.data();
        users.push({
          id: doc.id,
          nombre,
          correo,
          telefono,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button title = "Crear Usuario" onPress = {() => props.navigation.navigate('Formulario')}/>
      {
        users.map(user => {
          return(
            <ListItem key={user.id} bottomDivider
              onPress={() => {
                props.navigation.navigate("Detalles", {
                  userId: user.id,
                });
              }}
            >
              <ListItem.Chevron />
              <Avatar
                source={{
                  uri:
                    "https://www.iconpacks.net/icons/2/free-tree-icon-1578-thumb.png",
                }}
                rounded
              />
              <ListItem.Content>
                <ListItem.Title>{user.nombre}</ListItem.Title>
                <ListItem.Subtitle>{user.correo}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })
      }
    </ScrollView>
  );

}

export default ListadoScreen;