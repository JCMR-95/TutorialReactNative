import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class FormularioScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Formulario</Text>

        <Button
          title="Volver"
          onPress={() =>
            this.props.navigation.navigate('VerDatosScreen')
          }
        />
      </View>
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
  
  export default FormularioScreen;