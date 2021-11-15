import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BookingSubmitController from '../controllers/BookingSubmitController';

export default function BookingPayment({route, navigation}) {
  const booking = route.params.mBooking;
  const client = route.params.client;
//   console.log(booking);
  const icon = booking.service.id == 1 ? 'motorcycle' : 'car';

  return (
    <SafeAreaView style={styles.comtainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: '10%',
          width: '100%',
        }}>
        <TouchableOpacity
          style={styles.button_back}
          title=""
          onPress={() => alert('hey')}>
          <Image
            source={require('../../images/icon_back.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
          Thông tin đặt xe
        </Text>
      </View>
      <View style={{width: '95%', height: '80%'}}>
        <View style={styles.location}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Lộ trình di chuyển</Text>
            <TouchableOpacity>
              <Text style={{color: 'green', fontSize: 15, fontWeight: 'bold'}}>
                Thay đổi
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item_location}>
            <Icon name="map-marker" color="black" size={25} />
            <Text
              style={{fontSize: 15, marginLeft: 10, fontWeight: 'bold'}}
              ellipsizeMode="tail"
              numberOfLines = {1}
              >
              {booking.pickLocation}
            </Text>
          </View>
          <View style={styles.item_location}>
            <Icon name="map-marker-alt" color="black" size={25} />
            <Text
              style={{fontSize: 15, marginLeft: 10, fontWeight: 'bold'}}
              ellipsizeMode="tail"
              numberOfLines = {1}>
              {booking.destinationLocation}
            </Text>
          </View>
        </View>
        <View style={styles.service}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Dịch vụ</Text>
            <TouchableOpacity>
              <Text style={{color: 'green', fontSize: 15, fontWeight: 'bold'}}>
                Thay đổi
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 10,
              backgroundColor: 'black',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon
              name={icon}
              color="black"
              size={30}
              style={{color: 'white', marginHorizontal: 10}}
            />
            <View>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                {booking.service.nameService}
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {booking.numberPeople} chỗ
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.payment}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Phương thức thanh toán</Text>
            <TouchableOpacity>
              <Text style={{color: 'green', fontSize: 15, fontWeight: 'bold'}}>
                Thay đổi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '10%',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '95%',
        }}>
        <View>
          <Text style={[styles.title_payment, {fontSize: 20}]}>
            Tổng tiền: {booking.expense} vnđ
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            borderRadius: 10,
          }}
          onPress = {() => navigation.navigate("WaitDriver", {booking, client})}
          >
          <Text style={[styles.title_payment, {color: 'white', padding: 10}]}>
            Thanh toán
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  comtainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  location: {},
  service: {
    marginTop: 20,
  },
  payment: {
    marginTop: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button_back: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  item_location: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 64,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title_payment: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
