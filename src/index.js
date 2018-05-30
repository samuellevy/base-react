import { StackNavigator } from 'react-navigation';

import Posts from './scenes/posts';
import Profile from './scenes/profile';
import Login from './scenes/login';
import Home from './scenes/home';
import Teste from './scenes/teste';
import Curso from './scenes/curso';
import Quiz from './scenes/quiz';

console.disableYellowBox = true;

const App = StackNavigator({
  Quiz: { screen: Quiz },
  // Teste: {screen: Teste},
  // Login: { screen: Login },
  // Home: {screen: Home},
  Curso: { screen: Curso },
  Login: { screen: Login },
  Home: {screen: Home},
  Posts: { screen: Posts },
  Profile: { screen: Profile },
});

export default App;