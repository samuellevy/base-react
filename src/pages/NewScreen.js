import React from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../Components/Header';
import Navigation from '../Components/Navigation';

console.disableYellowBox = true;

const NewScreen = () => (
  <View style={styles.container}>
    <Header/>
    <Navigation/>
  </View>
);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f7fbfc'
  }
});

export default NewScreen;