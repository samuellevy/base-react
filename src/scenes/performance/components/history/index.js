import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';


export default class History extends Component {
  render() {
    let date = this.props.date;

    return (
      <View style={styles.container}>
        <Text>
          {date}
        </Text>
      </View>
    );
  }
}
