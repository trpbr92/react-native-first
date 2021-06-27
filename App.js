import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  const handleClick = () => Alert.alert('Woah!', 'Are you sure you want to see cringe?', [
    { text: 'Yes', onPress: () => console.log('Yes') },
    { text: 'No', onPress: () => console.log('No') },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color='red'
        title='click me for cringe' onPress={handleClick} />
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
