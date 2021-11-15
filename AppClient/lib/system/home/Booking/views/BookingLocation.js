import React from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BookingLocationController from '../controllers/BookingLocationController';
import UserLocationController, {userLocationNow, watchLocation} from '../controllers/UserLocationController';
import ViewBingMap from '../controllers/ViewMapController';

export default function BookingLocation(props) {
  const [start, setStart] = React.useState('');
  const [end, setEnd] = React.useState('');
  const [lat, setLat] = React.useState(21.03010934434909);
  const [long, setLong] = React.useState(105.8476923735);
  userLocationNow(setLat, setLong);
  const nextStep = () => {
    BookingLocationController(props, start, end);
  };
  

  return (
    <SafeAreaView style={styles.comtainer}>
      <ViewBingMap listPoints={[]} location = {[lat, long]} />
      <TouchableOpacity
        style={styles.buttonback1}
        title=""
        onPress={() => alert('hey')}>
        <Image
          source={require('../../images/icon_back.png')}
          style={styles.buttonback1}
        />
      </TouchableOpacity>
      <View style={{backgroundColor: '#ffffff', height: '6%'}} />
      <View style={styles.box}>
        <View style={styles.box1}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Icon name="search-location" color="black" size={25} />
              <Text
                style={{width: '80%', paddingLeft: 20, paddingVertical: 10, fontWeight: 'bold'}}>
                Chọn địa điểm
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '95%',
                alignItems: 'center',
              }}>
              <TextInput
                value={start}
                onChangeText={setStart}
                style={[styles.input, {width: '85%'}]}
                numberOfLines = {1}
                placeholder="Điểm đi"
              />
              <TouchableOpacity
                style={{width: '15%', alignItems: 'center'}}
                onPress={() => UserLocationController(setStart, setLat, setLong)}
                //onPress={() => watchLocation()}
                >
                <Icon name="street-view" color="black" size={25} />
              </TouchableOpacity>
            </View>
            <TextInput
              value={end}
              onChangeText={setEnd}
              style={styles.input}
              numberOfLines = {1}
              ellipsizeMode="head"
              placeholder="Điểm đến"
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.box2}
          onPress={() => {
            nextStep();
          }}>
          <Image
            style={styles.image_box2}
            source={require('../../images/icon_next_right.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    position: 'relative',
  },
  box: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    width: '90%',
    height: '20%',
    bottom: 30,
    marginHorizontal: '5%',
    borderRadius: 24,
    elevation: 4,
    flexDirection: 'row',
  },
  box1: {
    width: '90%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  box2: {
    width: '10%',
    height: '100%',
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    position: 'relative',
    borderLeftWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  image_box2: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '95%',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 64,
    borderWidth: 1,
    borderColor: '#000000',
    elevation: 5,
    fontWeight: 'bold'
  },
  buttonback1: {
    width: 40,
    height: 40,
    top: 10,
    left: 10,
    position: 'absolute',
  },
});
