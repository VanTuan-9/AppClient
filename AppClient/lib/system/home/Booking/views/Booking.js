import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookingLocation from './BookingLocation';
import BookingService from './BookingService';
import BookingPayment from './BookingPayment';
import BookingSubmit from './BookingSubmit';
import WaitDriver from './WaitDriver';
import BookTracking from './BookTracking';

const Stack = createNativeStackNavigator();

const Booking = ({route, navigation}) => {
  const client = route.params;

  return (
    <SafeAreaView style={styles.comtainer}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BookingLocation">
          {props => <BookingLocation {...props} client={client} />}
        </Stack.Screen>
        <Stack.Screen name="BookingService" component={BookingService} />
        <Stack.Screen name="BookingPayment" component={BookingPayment} />
        <Stack.Screen name="BookingSubmit">
          {props => <BookingSubmit {...props} />}
        </Stack.Screen>
        <Stack.Screen name="WaitDriver" component={WaitDriver} />
        <Stack.Screen name="BookTracking" component={BookTracking} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
  },
  search1: {
    position: 'absolute',
    left: 100,
  },
  input1: {
    position: 'absolute',
    left: 20,
    width: 100,
    height: 50,
  },
  input2: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
});

export default Booking;
