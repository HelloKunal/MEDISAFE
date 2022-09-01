import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Pressable, LogBox } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BarCodeScannerScreen from './src/screens/BarCodeScannerScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import ManualAddScreen from './src/screens/ManualAddScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

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
      <Text style={button_styles.button_style}>Home Screen</Text>
      <View>
      <Pressable
        style={button_styles.button_style}
        onPress={() => navigation.navigate('BarCodeScannerScreen')}
      >
      <Text>Scan QR Code</Text>
      </Pressable>
      <View style={button_styles.button_block_style}></View>
      </View>
      <View>
      <Pressable
        style={button_styles.button_style}
        onPress={() => navigation.navigate('CalendarScreen')}
      >
      <Text>Notifications</Text>
      </Pressable>
      <View style={button_styles.button_block_style}></View>
      </View>
      <View>
      <Pressable
        style={button_styles.button_style}
        onPress={() => navigation.navigate('ManualSave')}
      >
      <Text>Manual Save</Text>
      </Pressable>
      <View style={button_styles.button_block_style}></View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BarCodeScannerScreen" component={BarCodeScannerScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="ManualSave" component={ManualAddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const button_styles = StyleSheet.create({
  button_style: {
      "marginTop": 20,
      "marginRight": 20,
      "marginBottom": 20,
      "marginLeft": 20,
      "fontFamily": "monospace",
      "fontSize": 20,
      "fontWeight": "200",
      "letterSpacing": 1,
      "paddingTop": 15,
      "paddingRight": 30,
      "paddingBottom": 15,
      "paddingLeft": 30,
      "outline": 0,
      "borderWidth": 1,
      "borderColor": "black",
      "borderStyle": "solid",
      "cursor": "pointer",
      "position": "relative",
      "backgroundColor": "#ffe54c",
      "backgroundColor": "rgba(0, 0, 0, 0)"
  },
  button_block_style: {
      "marginTop": 20,
      "marginRight": 20,
      "marginBottom": 20,
      "marginLeft": 20,
      "paddingTop": 15,
      "paddingRight": 30,
      "paddingBottom": 15,
      "paddingLeft": 30,
      "content": "",
      "backgroundColor": "#ffe54c",
      "width": 160,
      "zIndex": -1,
      "position": "absolute",
      "height": "60%",
      "top": 7,
      "left": 7,
      "transition": "0.2s"
  }
});
