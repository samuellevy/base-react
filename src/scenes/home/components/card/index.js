import React, { Component } from 'react';

import { View,Text } from 'react-native';

export default class Card extends Component {
  render() {
    const {children} = this.props;
    return (
        <View>
            <Text>
              Teste
            </Text>
            {children}
        </View>
    );
  }
}
