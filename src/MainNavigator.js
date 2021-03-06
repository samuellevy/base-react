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
import Password from './scenes/password';
import Finish from './scenes/password/finish';
import FeedBack from './scenes/feedback';
// import Answers from './scenes/feedback/answers';
import Profile from './scenes/profile';
import Employe from './scenes/employee';
// import addEmployee from './scenes/employee/addEmployee';
import AboutCourse from './scenes/aboutCourse';
import Aula from './scenes/curso/aula'; 
import Questions from './scenes/questions'; 
import Result from './scenes/questions/components/result'; 
import Player from './scenes/player';

// Other confs
console.disableYellowBox = true;

// My component
const RootScene = TabNavigator({
  Home: {screen: Home},
  Curso: {screen: Curso},
  Aula: {screen: Aula},
  Performance: {screen: Performance},
  Ranking: {screen: Ranking},
  // Rule: {screen: Rule},
  More: {screen: More},
  // Contact: {screen: Contact},
  // AboutCourse: {screen: AboutCourse},
  // Profile: {screen: Profile},
  // // addEmployee: {screen: addEmployee},
  // Employe: {screen: Employe},
  // FeedBack: {screen: FeedBack},
  // Answers: {screen: Answers},
  // Sent: {screen: Sent},
  Player: {screen: Player}
  
}, {
  tabBarComponent: ({navigation}) => <Nav navigation={navigation} />,
  initialRouteName: 'Home',
  animationEnabled: true,
  mode: "card",
  tabBarPosition: 'bottom',
  swipeEnabled: false,
});
RootScene.navigationOptions = {
  header: ({ navigation }) => (<Header navigation={navigation}/>
  ),
};

// Main navigator
export default StackNavigator({
  Splash: {screen: Splash},
  Login: {screen: Login}, // has a skip button that navigates to root
  Password: {screen: Password},
  Finish: {screen: Finish},
  Home: {screen: RootScene},
  Question: {screen: Questions},
  Result: {screen: Result}
}, {
  initialRouteName: 'Question',
  // headerMode: 'none',
  mode: 'modal',
  swipeEnabled: false,  
});
