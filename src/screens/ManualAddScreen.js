import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// start , quantity , freq, photo,name(optional),add med
export default function ManualAddScreen() {
  return (
    <View style={styles.container}>
      <Text>Start Coding inside this View container, GoodLuck</Text>
      
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
