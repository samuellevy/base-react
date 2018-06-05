import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavIcon from '../../components/navigation/NavIcon';
import styles from './styles';

import Header from '../../components/header';
import Nav from '../../components/navigation';
import SmallProfile from './components/smallprofile';
import RankingBox from './components/rankingbox';
import LastUpdate from './components/lastupdate';
import Desempenho from './components/desempenho';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={{marginBottom: 60}}>
          <SmallProfile/>
          <RankingBox/>
          <LastUpdate/>
          <Desempenho/>
          <Desempenho/>
        </ScrollView>
        {/* <Nav navigation={this.props.navigation} /> */}
      </View>
    );
  }
}


