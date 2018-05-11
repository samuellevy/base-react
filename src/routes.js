import { StackNavigator } from 'react-navigation';

import Main from './pages/main';
import NewScreen from './pages/NewScreen';

export default StackNavigator({
  Main: { screen: Main },
  NewScreen: { screen: NewScreen },
},{ 
  headerMode: 'none',
});
