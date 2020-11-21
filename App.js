import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your project!</Text>
      <Text>Now what!</Text>
      <Home />
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
});
