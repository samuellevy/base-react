// React components
import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import { View, Text} from 'react-native';

import Nav from './components/navigation';
import Header from './components/header';

// Load Scenes
import Posts from './scenes/posts';
import Profile from './scenes/profile';
import Login from './scenes/login';
import Home from './scenes/home';
// import Curso from './scenes/curso';


// Other confs
console.disableYellowBox = true;

// scene imports

const RootScene = TabNavigator({
  Home: {screen: Home},
  // Curso: {screen: Curso}
}, {
  tabBarComponent: ({navigation}) => <Nav navigation={navigation} />,
  initialRouteName: 'Home',
});

RootScene.navigationOptions = {
  header: <Header/>,
};



export default StackNavigator({
  tour: {screen: Login}, // has a skip button that navigates to root
  Home: {screen: RootScene},
}, {
  initialRouteName: 'Home',
});
