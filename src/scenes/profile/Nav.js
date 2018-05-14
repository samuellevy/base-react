import React, { Component } from 'react';
import {  View, Text, TouchableOpacity} from 'react-native';

export default class Navigation extends Component {
    
  render() {
    return (
      <View>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Posts')}}>
            <Text> Meu profile </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
