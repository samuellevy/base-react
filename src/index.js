import { StackNavigator } from 'react-navigation';

import Posts from './scenes/posts';
import Profile from './scenes/profile';
console.disableYellowBox = true;

const App = StackNavigator({
  Posts: { screen: Posts },
  Profile: { screen: Profile },
});

export default App;