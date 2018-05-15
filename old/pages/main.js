import React, { Component } from 'react';
import {  View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import Header from '../Components/Header';
import SmallProfile from '../Components/SmallProfile';
import TrainningBox from '../Components/TrainningBox';
import Navigation from '../Components/Navigation';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
          <ScrollView>
            <SmallProfile/>
            <TrainningBox/>
            <TrainningBox/>
            <TrainningBox/>
          </ScrollView>
          <Navigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f7fbfc'
  }
});