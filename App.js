import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  const handlePress = () => console.log('text pressed');

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello World!</Text>
      {/* <Image source={require('./assets/favicon.png')} /> */}
      <Image source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300'
      }} />
      <StatusBar style="auto" />
    </SafeAreaView>
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
