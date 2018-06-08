import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';


export default class Card extends Component {
  render() {
    let color = this.props.color;
    let title = this.props.title;
    let icon = this.props.icon;
    let store = this.props.store;
    let score = this.props.score;

    const {children} = this.props;
    return (
      <View style={styles.card}>
        {/* {children} */}
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child, {
            color: color
          })
        })}
      </View>
    );
  }
}
