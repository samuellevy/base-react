import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Question from './components/Question';

import styles from './styles';

export default class Quiz extends Component {
  static navigationOptions = {
    header: null
};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <Text style={styles.txtTitle}>MÓDULO 01: CIMENTO CPII</Text>
        </View>
        
      </View>
    );
  }
}
