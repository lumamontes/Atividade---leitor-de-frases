import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import * as Speech from 'expo-speech';
import api from './src/services/api';
export default function App() {
  async function speak() {
    const response = await api.get('/frases/clarice')
    const Frase = response.data.text;
    Speech.speak(Frase);
  }
  const image = { uri: 'https://i.imgur.com/EZJKkXp.jpg' };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.photo} source={image}>
        <View style={{flex: 0.5, padding: 5}}>
        <Text style={styles.title}>Clarice Lispector</Text>
        <Text style={{color: 'white', marginLeft: 10, fontSize: 20}}>Clarice Lispector (1920-1977) foi uma escritora brasileira. De origem judia, nascida na Ucrânia,
            é reconhecida como uma das mais importantes escritoras do século XX.</Text>
        <Text style={{color: 'white', fontSize: 20, marginLeft: 10, marginBottom: 20, marginTop: 10 }}>Clique no botão abaixo para ouvir uma frase da autora Clarice Lispector, de acordo com o site O pensador. </Text>
        <Button title="Clique aqui!" onPress={speak} />
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: '#e12407',
    fontWeight: 'bold'
  },
  photo: {
    marginTop: 10,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#DBDBDB',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    
  }
});
