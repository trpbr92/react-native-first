import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform, View, Dimensions, Text } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {

  return <WelcomeScreen />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
