import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavIcon from '../components/navigation/NavIcon';
import styles from './styles';

import Header from '../components/header';
import Nav from '../components/navigation';
import SmallProfile from './components/smallprofile';
import RankingBox from './components/rankingbox';
import LastUpdate from './components/lastupdate';
import InfoBox from './components/infobox';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ focused, tintColor }) => {
      let iconName = `ios-options`;
      return <NavIcon title={'Home'} icon={'home'}/>;
    },
  };
  
  render() {
    return (
      <View style={styles.container}>
      <Header />
      <ScrollView>
      <SmallProfile/>
      <RankingBox/>
      <LastUpdate/>
      <InfoBox/>
      </ScrollView>
      {/* <Nav navigation={this.props.navigation} /> */}
      </View>
    );
  }
}


