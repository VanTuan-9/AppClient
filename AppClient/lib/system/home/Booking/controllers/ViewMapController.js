import axios from 'axios';
import React from 'react';
import {StyleSheet} from 'react-native';
import BingMapsView from 'react-native-bing-maps';
export default function ViewBingMap({listPoints, location}) {
  const iconSVG =
    '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M235 627 c-62 -21 -97 -42 -139 -84 -123 -121 -123 -324 0 -447 123 -123 325 -123 448 0 123 123 123 325 0 448 -77 77 -215 114 -309 83z"/></g></svg>';
  if(listPoints.length == 0)
    listPoints = [[21.03010934434909,105.8476923735]];
  let lat, long;
  if(typeof location == 'undefined' ) {
    lat = 21.03010934434909;
    long = 105.8476923735;
  }
  else {
    lat = location[0];
    long = location[1];
  }
  return (
    <BingMapsView
      credentialsKey="ArzpuCDVJkcuBXSWS_vXCeRRbDh1OJssB_wGAKCF1MVYLBwxDafuw5q0CcLYo1Y0"
      mapLocation={{lat: lat, long: long, zoom: 16}}
      style={styles.box}
      pins={[{lat: lat, long: long, icon: iconSVG}]}
      buildingsVisible={false}
      transitFeaturesVisible={true}
      routes={listPoints}
    />
  );
}
const styles = StyleSheet.create({
  box: {
    height: '94%',
    width: '100%',
  },
});
