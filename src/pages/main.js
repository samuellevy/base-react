import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import SmallProfile from '../Components/SmallProfile';
import TrainningBox from '../Components/TrainningBox';
import Navigation from '../Components/Navigation';

const Main = () => (
  <View style={styles.container}>
    <Header/>
    <SmallProfile/>
    <TrainningBox/>
    <Navigation/>
  </View>
);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f7fbfc'
  }
});

export default Main;



