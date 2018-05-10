import React, { Component } from 'react';

import { View, Image,Text } from 'react-native';

import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/img/marca.png')}/>
      </View>
    );
  }
}
