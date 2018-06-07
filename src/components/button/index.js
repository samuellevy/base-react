import React, { Component } from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class Button extends Component {
  render() {
    let title = this.props.title;
    let size = this.props.size;
    return (
    <TouchableOpacity onPress={this.signIn}>
        <View style={[styles.boxButton, {paddingHorizontal: size}]}>
            <Text style={styles.txtSign}>{title.toUpperCase()}</Text>
        </View>
    </TouchableOpacity>
    );
  }
}
