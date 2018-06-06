import React, { Component } from 'react';

import { View } from 'react-native';
import Title from '../../components/title/primary';

import styles from './styles';

export default class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Title textContent="Fale Conosco"/>
        </View>
      </View>
    );
  }
}