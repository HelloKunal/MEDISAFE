import React, {useState} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import object from '../data/prescription1';

export default function ManualAddScreen() {
  const [obj, setobjstate] = useState(object[0]);
  
  const getData = async () => {
    try {
      const obje = await AsyncStorage.getItem('@storage_Key')
      setobjstate(obje);
      console.warn(obj);
      // console.warn(obje);
      return obje != null ? JSON.parse(obje) : null;
    } catch(e) {
      // error reading value
    }
  }


  getData();  
  return (
    <View style={styles.container}>
      <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={obj}
      />
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
