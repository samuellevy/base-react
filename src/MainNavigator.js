import { StackNavigator, TabNavigator } from 'react-navigation';

import Posts from './scenes/posts';
import Profile from './scenes/profile';
import Login from './scenes/login';
import Home from './scenes/home';
import Default from './layouts/default';

console.disableYellowBox = true;

export default MainNavigator = StackNavigator({
  // Login: { screen: Login },
  Home: {screen: Default},
  Posts: { screen: Posts },
},{headerMode: 'none',});