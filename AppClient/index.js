/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Chat from './lib/system/chat/views/Chat'
import BookingSubmit from './lib/system/home/Booking/views/BookingSubmit';
import BookTracking from './lib/system/home/Booking/views/BookTracking';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Chat);
//AppRegistry.registerComponent(appName, () => BookTracking);
//AppRegistry.registerComponent(appName, () => BookingSubmit);