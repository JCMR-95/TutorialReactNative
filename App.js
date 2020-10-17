import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'

class HolaJC extends Component {

  saludo = () => { Alert.alert("Hola JC")}

  render() {
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
          <Button title = "Aplicación JC" onPress = {this.saludo}/>
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

export default HolaJC;
