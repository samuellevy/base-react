// React components
import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import { View, Text} from 'react-native';

// Load components
import Nav from './components/navigation';
import Header from './components/header';

// Load main scene
import Login from './scenes/login';

// Logged scenes
//import Home from './scenes/home';
import Curso from './scenes/curso';
import Performance from './scenes/performance';
import Ranking from './scenes/ranking';
import Quiz from './scenes/quiz';
import Contact from './scenes/contact';

// Other confs
console.disableYellowBox = true;

// My component
const RootScene = TabNavigator({
  //Home: {screen: Home},
  Curso: {screen: Curso},
  Performance: {screen: Performance},
  Ranking: {screen: Ranking},
  More: {screen: Contact},
}, {
  tabBarComponent: ({navigation}) => <Nav navigation={navigation} />,
  initialRouteName: 'More',
});

RootScene.navigationOptions = {
  header: <Header/>,
};

// Main navigator
export default StackNavigator({
  Login: {screen: Login}, // has a skip button that navigates to root
  Home: {screen: RootScene},
}, {
  initialRouteName: 'Home',
});
