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
import Home from './scenes/home';
import Curso from './scenes/curso';
import Performance from './scenes/performance';
import Ranking from './scenes/ranking';
import Quiz from './scenes/quiz';
import Contact from './scenes/contact';
import More from './scenes/more';
import Rule from './scenes/rule';
import Splash from './scenes/splash';

// Other confs
console.disableYellowBox = true;

// My component
const RootScene = TabNavigator({
  Home: {screen: Home},
  Curso: {screen: Curso},
  Performance: {screen: Performance},
  Ranking: {screen: Ranking},
  More: {screen: More},
  Contact: {screen: Contact},
  // Rule: {screen: Rule},
}, {
  tabBarComponent: ({navigation}) => <Nav navigation={navigation} />,
  initialRouteName: 'Home',
  animationEnabled: true,
  mode: "card",
  tabBarPosition: 'bottom',
  swipeEnabled: false
});

RootScene.navigationOptions = {
  header: <Header/>,
};

// Main navigator
export default StackNavigator({
  Splash: {screen: Splash},
  Login: {screen: Login}, // has a skip button that navigates to root
  Home: {screen: RootScene},
}, {
  initialRouteName: 'Splash',
  headerMode: 'none',
});
