import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ManualAddScreen() {
  return (
    <View style={styles.container}>
      <Text>Start Coding inside this View container, GoodLuck. Parthesh</Text>
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
