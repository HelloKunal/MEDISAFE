import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, Platform } from 'react-native';
import * as Calendar from 'expo-calendar';
import AsyncStorage from '@react-native-async-storage/async-storage';

let CalendarID = 0;
let sDate, eDate, testEventData, testAsyncData;

import moment from 'moment'; 
var now = moment().format("YYYY-MM-DD");

// const testEventData = {
//   title: "Paracetamol",
//   startDate: "2021-11-21T10:00:00.000Z",
//   endDate: "2021-11-21T11:00:00.000Z",
//   occurrence: 5,
// };

// const testAsyncData = {
//   name: "Paracetamol",
//   quantity: 5,
//   time: 1,
// };

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        // console.log('Here are all your calendars:');
        // console.log({ calendars });
      }
    })();
  }, []);

  const [AsyncData, setAsyncData] = useState();
  
  const getData = async () => {
    try {
      const recievedAsyncData = await AsyncStorage.getItem('@storage_Key')

      // setAsyncData(recievedAsyncData);
      testAsyncData = JSON.parse(recievedAsyncData);
      // console.warn(recievedAsyncData);
      return recievedAsyncData != null ? recievedAsyncData : null;
      return recievedAsyncData != null ? JSON.parse(recievedAsyncData) : null;
    } catch(e) {
      // error reading value
      console.warn("ERROR");
      console.warn(e);
    }
  }
  
  getData();
  return (
    <View style={styles.container}>
      <Text style={button_styles.button_style}>Click on each button</Text>      
      <View>
      <Pressable
        style={button_styles.button_style}
        onPress={createCalendar}
      >
      <Text>Create a new calendar</Text>
      </Pressable>
      <View style={button_styles.button_block_style}></View>
      </View>
      <View>
      <Pressable
        style={button_styles.button_style}
        onPress={console.warn(CalendarID)}
      >
      <Text>Get curent Calendar ID</Text>
      </Pressable>
      <View style={button_styles.button_block_style}></View>
      </View>
      <View>
      <Pressable
        style={button_styles.button_style}
        onPress={console.log(testAsyncData)}
      >
      <Text>Show the data from QR</Text>
      </Pressable>
      <View style={button_styles.button_block_style}></View>
      </View>
      <View>
      <Pressable
        style={button_styles.button_style}
        onPress={() => {
          for(let i = 30; i < 100; i++) {
            try {
              Calendar.deleteCalendarAsync(i.toString())
            }
            catch(e) {
              //
            }
          }
        }}
      >
      <Text>Delete all the Calendars</Text>
      </Pressable>
      <View style={button_styles.button_block_style}></View>
      </View>
      <View>
      <Pressable
        style={button_styles.button_style}
        onPress={() => {
          for(let tAD of testAsyncData) {          
            sDate = new Date(now + 'T' + ((tAD.time == 1) ? '09' : (tAD.time == 2) ? '14' : '21') + ':00:00.000Z');
            eDate = new Date(now + 'T' + ((tAD.time == 1) ? '10' : (tAD.time == 2) ? '15' : '22') + ':00:00.000Z');
            console.log(sDate);
            console.log(eDate);
            console.log(tAD.quantity);
            testEventData = {
              title: tAD.name,
              startDate: sDate,
              endDate: eDate,
              occurrence: Number(tAD.quantity),
            }
            addEvent(testEventData)
          }
        }}
      >
      <Text>Add Events on Calendar</Text>
      </Pressable>
      <View style={button_styles.button_block_style}></View>
      </View>
    </View>
    // 
  );
}
async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

async function createCalendar() {
  // console.warn(`Running`);
  const defaultCalendarSource =
    Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: 'Expo Calendar' };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: 'Expo Calendar',
    color: 'blue',
    entityType: Calendar.EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: 'internalCalendarName',
    ownerAccount: 'personal',
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
  CalendarID = newCalendarID;
  console.log(`Your new calendar ID is: ${newCalendarID}`);
}

async function addEvent(eventData) {
  // console.warn(`Running`);
  const newCalendarEvent = await Calendar.createEventAsync(CalendarID, {
    "startDate": eventData.startDate,
    "endDate": eventData.endDate, // removing this field allows the update to succeed
    "notes": "Medicine Reminder",
    "title": eventData.title,
    "location": "",
    "alarms": [
      {
        "relativeOffset": 0
      }
    ],
    "allDay": false,
    "url": "",
    "timeZone": "Asia/Kolkata",
    "organizerEmail": "test@example.com",
    "recurrenceRule": {
      "frequency": "daily",
      "interval": 0,
      "occurrence": eventData.occurrence,
    },
  });
  console.warn(`Done`);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
      "width": 215,
      "zIndex": -1,
      "position": "absolute",
      "height": "60%",
      "top": 7,
      "left": 7,
      "transition": "0.2s"
  }
});
