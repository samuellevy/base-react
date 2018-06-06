import React, { Component } from 'react';

import { View,Text } from 'react-native';

import styles from './styles';

import CardHeader from '../cardheader';
import CardFooter from '../cardfooter';

export default class Card extends Component {
  render() {
    const {children} = this.props;
    return (
      <View style={styles.container}>
        <CardHeader />
        <View style={styles.card}>
          {children}
          <CardFooter />
        </View>
      </View>
    );
  }
}
