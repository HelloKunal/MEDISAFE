import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BarCodeScannerScreen from './src/screens/BarCodeScannerScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import ManualAddScreen from './src/screens/ManualAddScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const testAsyncData = {
  name: "Paracetamol",
  quantity: 5,
  time: 1,
};

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to BarCodeScannerScreen"
        onPress={() => navigation.navigate('BarCodeScannerScreen')}
      />
      <Button
        title="Go to CalendarScreen"
        onPress={() => navigation.navigate('CalendarScreen')}
      />
      <Button
        title="Custome Save"
        onPress={() => storeData(testAsyncData)}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BarCodeScannerScreen" component={BarCodeScannerScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
