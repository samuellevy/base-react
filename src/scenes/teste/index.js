import React, { Component } from 'react';

import { View, StyleSheet, Text, Button } from 'react-native';
import api from '../../services/api';

export default class MyComponent extends Component {
  signIn = async () => {
    const response = await api.post('/auth/authenticate')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.signIn} title="Entrar"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});