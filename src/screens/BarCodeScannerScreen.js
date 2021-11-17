import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';

import moment from 'moment'; 
var now = moment().format("YYYY-MM-DD");

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

   const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // console.log(data);
    JSON.parse(data);
    let newData = {};
    // console.warn(now);
    newData[now] = {};
    newData[now].marked = true;
    newData[now].dotColor = "red";
    newData[now].activeOpacity = 0;
    let newDataSet = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            newDataSet.push(newData);
            // console.warn("1");
            // newDanewDataconsole.log(key + " -> " + data[key]);
        }
    }
    // alert(newDataSet[0].now.marked);
    storeData(newDataSet);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>At Least This is Printed</Text>
      <Button
        title="Reset"
        onPress={() => setScanned(false)}
      />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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
  absoluteFillObject: {
  }
});
