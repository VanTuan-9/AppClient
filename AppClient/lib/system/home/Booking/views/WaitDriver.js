import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import { socket } from '../../../../login/controllers/LoginController';
import BookingSubmitController from '../controllers/BookingSubmitController';
export default function WaitDriver({route, navigation}) {
  const booking = route.params.booking;
  const client = route.params.client;
  const nBooking = BookingSubmitController(
    booking,
    client,
    navigation,
  );
  React.useEffect(() => {
    socket[0].on('driver_info', data => {
      navigation.navigate('BookingSubmit', {
        nBooking,
        client,
        data,
      });
    });
  }, []);
  return (
    <View>
      <Text>Đang chờ lái xe.</Text>
    </View>
  );
}
