import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import styles from './styles';


export default class WinnerCard extends Component {
  render() {
    let color = this.props.color;
    let title = this.props.title;
    let icon = this.props.icon;
    let store = this.props.store;
    let score = this.props.score;

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../../../assets/img/1placegold.png')}
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>{'1º Lugar'.toUpperCase()}</Text>
            <Text style={styles.loja}>Casa Fort Distribuidora</Text>
            <Text style={styles.score}>430 pts</Text>
          </View>
        </View>
      </View>
    );
  }
}
