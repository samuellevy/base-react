import { StackNavigator } from 'react-navigation';

import Posts from './scenes/posts';
import Profile from './scenes/profile';
import Login from './scenes/login';
import Home from './scenes/home';
import Teste from './scenes/teste';
import Curso from './scenes/curso/curso';
import ListCurso from './scenes/curso/listCurso';
import Rule from './scenes/rule';
import Quiz from './scenes/quiz';
import ModalExample from './scenes/modalExample';

console.disableYellowBox = true;

const App = StackNavigator({
  ModalExample: { screen: ModalExample},
  // Home: {screen: Home},
  // Teste: {screen: Teste},
  // Curso: { screen: Curso },
  ListCurso: { screen: ListCurso },
  Rule: {screen: Rule},
  // Login: { screen: Login },
  Quiz: { screen: Quiz },
  // Teste: {screen: Teste},
  // Login: { screen: Login },
  Login: { screen: Login },
  Posts: { screen: Posts },
  Profile: { screen: Profile }, 
});

export default App;

