import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './home/Home';
import History from './history/views/History';
import Chat from './chat/views/Chat';
import Account from './account/views/Account';
import Booking from './home/Booking/views/Booking';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const SystemTabs = ({client}) => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#FF0000'}}
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{backgroundColor: '#FF0000'}}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        children={props => <Home {...props} client={client} />}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => (
            <Icon name="history" color={color} size={size} />
          ),
        }}
        name="History"
        component={History}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <Icon name="comment" color={color} size={size} />
          ),
        }}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

const System = ({route, navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SystemTabs">
        {props => <SystemTabs {...props} client={route.params} />}
      </Stack.Screen>
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default System;
