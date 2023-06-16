import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerRodape}>
        <Image
          source={require('../../../assets/herder.png')}
          style={styles.imageRodape}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerLogo}>
        <Text style={styles.textoLogo}>Bem-vindo!</Text>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.imageLogo}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SinghIn')}
      >
        <Text style={styles.buttonText}>Logar ou Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  containerLogo: {
    alignItems: 'center',
    marginTop: 20,
  },
  containerRodape: {
    marginBottom: 20,
  },
  imageLogo: {
    width: 200,
    height: 200,
  },
  imageRodape: {
    width: '100%',
    height: 100,
  },
  textoLogo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FF3366',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
