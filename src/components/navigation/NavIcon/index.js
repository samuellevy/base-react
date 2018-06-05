import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class NavIcon extends Component {
  render() {
    let title = this.props.title;
    let icon = this.props.icon;
    return (
      <View style={styles.tabBtn}>
        <MaterialIcon name={icon} size={25} style={styles.icon} color={"#ddd"}></MaterialIcon>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}
