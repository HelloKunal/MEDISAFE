import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { StyleSheet, Text, View } from 'react-native';

import object from '../data/prescription1';

export default function ManualAddScreen() {

  return (
    <View style={styles.container}>
      <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={object[0]}
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
