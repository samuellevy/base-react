import { StackNavigator } from 'react-navigation';

import Posts from './scenes/posts';
import Profile from './scenes/profile';
import Login from './scenes/login';
import Home from './scenes/home';

console.disableYellowBox = true;

const App = StackNavigator({
  Login: { screen: Login },
  Home: {screen: Home},
  Posts: { screen: Posts },
  Profile: { screen: Profile },
});

export default App;