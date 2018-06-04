import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Home from '../../scenes/home';
import Curso from '../../scenes/curso/curso';

export default TabNavigator(
  {
    Home: { screen: Home, navigationOptions: { tabBarVisible: true } },
    Curso: { screen: Curso, navigationOptions: { tabBarVisible: true }  },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
    animationEnabled: true, mode: "card" 
  });