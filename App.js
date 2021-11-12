import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BarCodeScannerScreen from './src/screens/BarCodeScannerScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import ManualAddScreen from './src/screens/ManualAddScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CalendarScreen />
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
