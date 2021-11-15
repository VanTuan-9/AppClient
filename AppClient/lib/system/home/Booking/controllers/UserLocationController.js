import axios from 'axios';
import { Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default function UserLocationController(setStart, setLat, setLong) {
  Geolocation.getCurrentPosition(
    position => {
      const location =
        position.coords.latitude + ',' + position.coords.longitude;
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      axios
        .get(
          'https://dev.virtualearth.net/REST/v1/Locations/' +
            location +
            '?o=json&key=Ap4QcVrvAUTkJKLM9RbTtRh1MD7Ioqt_QBxubQz3rIaVDskMgVZXQ2ux-NgfO30d',
        )
        .then(response => {
          setStart(response.data.resourceSets[0].resources[0].name);
        })
        .catch(error => {
          console.log(error);
        });
    },
    error => {
      console.log(error.code, error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 10000,
      distanceFilter: 1,
    },
  );

}
export function userLocationNow(setLat, setLong) {
  Geolocation.getCurrentPosition(
    position => {
      const location =
        position.coords.latitude + ',' + position.coords.longitude;
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    },
    error => {
      console.log(error.code, error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 10000,
      distanceFilter: 1,
    },)
}
export function watchLocation () {
  Geolocation.watchPosition(
    position => {
      // setStart(position.coords.latitude + '' + position.coords.longitude);
      Alert.alert(
        'Tắt',
        'tắt?',
        [{text: 'cancel', style: 'cancel'},
        {
          text: 'OK',
          onPress: () => {
            Geolocation.stopObserving();
          },
        }]
      );
      console.log(position.coords);
    },
    error => {},
    {enableHighAccuracy: true,distanceFilter: 1, interval: 1000},
  );
}