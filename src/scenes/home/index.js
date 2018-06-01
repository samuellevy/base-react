import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import styles from './styles';

import Header from '../components/header';
import Nav from '../components/navigation';
import SmallProfile from './components/smallprofile';
import RankingBox from './components/rankingbox';
import LastUpdate from './components/lastupdate';
import InfoBox from './components/infobox';

export default class Home extends Component {
  static navigationOptions = {
    header: null
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
        <Nav navigation={this.props.navigation} />
      </View>
    );
  }
}


