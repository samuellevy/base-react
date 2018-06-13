import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';


export default class History extends Component {
  render() {
    let date = this.props.date;
    let description = this.props.description;
    let score = this.props.score;

    return (
      <View style={styles.container}>
        <View style={styles.dateCell}>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.introCell}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.score}>+{score} pts</Text>
        </View>
      </View>
    );
  }
}
