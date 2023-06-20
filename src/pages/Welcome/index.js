import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          Animatable="flipInY"
          source={require('../../assets/logo.png')}
          style={{ width: '100%' }}
          resizeMode='contain'

        />

      </View>


      <Animatable.View delay={1000} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Cadastre para Aproveitar as Ofertas!</Text>
        <Text style={styles.text}>Faça Login para Começar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >


          <Text style={styles.buttonText}>Acessar</Text>

        </TouchableOpacity>
      </Animatable.View>



    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#38a69d'

  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#38a69d',
    paddingVertical: 8,
    borderRadius: 50,
    width: '60%',
    bottom: '15%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',

  },
});

