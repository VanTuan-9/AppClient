import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getGPSDriver } from '../controllers/BookTrackingController';
import ViewBingMap from '../controllers/ViewMapController';

export default function BookTracking({route}) {
  const listPoints = route.params.listPoints;
  const [lat, setLat] = React.useState(21.03010934434909);
  const [long, setLong] = React.useState(105.8476923735);
  React.useEffect(() => {
    getGPSDriver(setLat, setLong);
  },[]);
  return (
    <View style={styles.comtainer}>
      <ViewBingMap listPoints={listPoints} location={[lat, long]} />
      <TouchableOpacity
        style={styles.buttonback1}
        title=""
        onPress={() => alert('hey')}>
        <Image
          source={require('../../images/icon_back.png')}
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>
      <View style={styles.location}>
        <View style={styles.item_location}>
          <Icon name="map-marker" color="black" size={25} />
          <Text
            style={{fontSize: 15, marginLeft: 10, fontWeight: 'bold'}}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {route.params.pickLocation}
          </Text>
        </View>
        <View style={styles.item_location}>
          <Icon name="map-marker-alt" color="black" size={25} />
          <Text
            style={{fontSize: 15, marginLeft: 10, fontWeight: 'bold'}}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {route.params.destinationLocation}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },
  checkGPS: {
    backgroundColor: 'red',
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
  location: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    borderRadius: 10,
  },
  buttonback1: {
    width: 40,
    height: 40,
    top: 10,
    left: 10,
    position: 'absolute',
  },
});
