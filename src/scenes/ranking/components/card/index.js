import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import styles from './styles';


export default class Card extends Component {
  render() {
    let color = this.props.color;
    let title = this.props.title;
    let image = this.props.image;
    let store = this.props.store;
    let score = this.props.score;

    switch(image){
      case '2-ranking':
        url = require('../../../../../assets/img/2-ranking.png');
      break;
      case '2-ranking-active':
        url = require('../../../../../assets/img/2-ranking-active.png');
      break;
      case '3-ranking':
        url = require('../../../../../assets/img/3-ranking.png');
      break;
      case '3-ranking-active':
        url = require('../../../../../assets/img/3-ranking-active.png');
      break;
      case '4-ranking':
        url = require('../../../../../assets/img/4-ranking.png');
      break;
      case '4-ranking-active':
        url = require('../../../../../assets/img/4-ranking-active.png');
      break;
    }

    return (
      <View style={styles.container}>
        <View style={styles.card}>

          <View style={styles.titleBox} backgroundColor={color}>
            <Text style={styles.title}>{title.toUpperCase()}</Text>
          </View>
            <Image
                style={styles.image}
                source={url}
              /> 
          <Text style={styles.loja}>{store}</Text>
          <Text style={[styles.score, color={color}]}>{score} pts</Text>
        </View>
      </View>
    );
  }
}
