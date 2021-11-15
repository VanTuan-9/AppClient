import React from 'react';
import {
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BookTrackingController from '../controllers/BookTrackingController';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function BookingSubmit({route, navigation}) {
  LogBox.ignoreAllLogs(true);
  const booking = route.params.nBooking._W;
  console.log(booking);
  const chat = () => {
    navigation.navigate('Chat');
  };
  return (
    <SafeAreaView style={styles.comtainer}>
      <View style={styles.title}>
        <Icon name="check-circle" size={35} color="green" />
        <Text style={styles.text_title}>Đặt xe thành công</Text>
      </View>
      <View style={styles.infor_driver}>
        <Image
          style={styles.image_driver}
          source={require('../../images/icon_driver.gif')}
        />
        <View style={styles.content_driver}>
          <Text style={styles.text_content_driver}>
            Tài xế: {route.params.data.last_name} {route.params.data.first_name}
          </Text>
          <Text style={styles.text_content_driver}>BSX: 1111</Text>
          <Text style={styles.text_content_driver}>Liên lạc: 0123</Text>
        </View>
      </View>
      <View style={styles.route}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title_location}>Lộ trình di chuyển</Text>
        </View>
        <View style={styles.item_location}>
          <Icon name="map-marker" color="black" size={25} />
          <Text
            style={{fontSize: 15, marginLeft: 10, fontWeight: 'bold'}}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {booking[0].pickLocation}
          </Text>
        </View>
        <View style={styles.item_location}>
          <Icon name="map-marker-alt" color="black" size={25} />
          <Text
            style={{fontSize: 15, marginLeft: 10, fontWeight: 'bold'}}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {booking[0].destinationLocation}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title_location}>Tổng cộng: </Text>
          <Text style={styles.title_location}>{booking[0].expense} vnđ</Text>
        </View>
      </View>
      <View style={styles.choose}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#CC0000'}]}>
          <Text style={{color: 'white'}}>Hủy đặt xe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'green'}]}
          onPress={() =>
            BookTrackingController(
              booking[0].pickLocation,
              booking[0].destinationLocation,
              route.params.client,
              navigation,
            )
          }>
          <Text style={{color: 'white'}}>Theo dõi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    // <SafeAreaView style={styles.comtainer}>
    //   <View style = {styles.title}>
    //   <Icon name = "" size = {20} color = "green" />
    //   <Text style = {styles.title}>Đặt xe thành công:
    //   {/* {booking[0].id} */}
    //   </Text>
    //   </View>
    //   <TouchableOpacity
    //     style = {styles.chat}
    //     onPress = {() => chat()}
    //   >
    //       <Text>
    //           Nhắn tin với anh tài xế
    //       </Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     style = {styles.chat}
    //     // onPress = {() => BookTrackingController(booking[0].pickLocation, booking[0].destinationLocation, route.params.client, navigation)}
    //   >
    //       <Text>
    //           Xem bản đồ
    //       </Text>
    //   </TouchableOpacity>
    // </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infor_driver: {
    flex: 2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_driver: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    backgroundColor: '#008000',
  },
  content_driver: {
    marginLeft: 20,
  },
  text_content_driver: {
    fontSize: 18,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  route: {
    flex: 3,
    width: '95%',
  },
  choose: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignItems: 'flex-end',
  },
  title_location: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
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
  button: {
    width: '45%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: {width: -2, peak: 4},
    shadowOpacity: 2,
    shadowRadius: 3,
  },
});
