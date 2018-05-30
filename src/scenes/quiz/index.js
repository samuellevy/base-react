import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class Quiz extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Title}>
          <Text>MÓDULO 01: CIMENTO CPII</Text>
        </View>
        <View style={styles.boxQuestion}>
          <Text>1. O que é filler?</Text>
          <View style={styles.answer}>
            <Text></Text>
          </View>
        </View>
      </View>
    );
  }
}
