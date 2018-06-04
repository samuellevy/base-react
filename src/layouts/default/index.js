import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Home from '../../scenes/home';
import Curso from '../../scenes/curso/curso';
import Performance from '../../scenes/performance';
import Ranking from '../../scenes/ranking';
import Posts from '../../scenes/posts';

import Nav from '../../scenes/components/navigation';

export default TabNavigator(
  {
    Home: { screen: Home, navigationOptions: { tabBarVisible: true } },
    Curso: { screen: Curso, navigationOptions: { tabBarVisible: true }  },
    Performance: { screen: Performance, navigationOptions: { tabBarVisible: true }  },
    Ranking: { screen: Ranking, navigationOptions: { tabBarVisible: true }  },
    Posts: { screen: Posts, navigationOptions: { tabBarVisible: true }  },
  },
  {
    // tabBarComponent: Nav,
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'blue',
      showLabel: false,
      style: {
        
      },
      tabStyle:{

      },
      labelStyle:{

      }
    },
    animationEnabled: true, mode: "card" 
  });