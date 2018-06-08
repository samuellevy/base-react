import React, { Component } from 'react';

import { View, Text, AsyncStorage } from 'react-native';

import {colors} from '../../styles';
const timer = require('react-native-timer');

export default class Splash extends Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount = async () => {
        // AsyncStorage.clear();
        const token = await AsyncStorage.getItem('@CodeApi:token');
        if(token) {
            console.log(token);
            //this.props.navigation.navigate('Home');
        } else {
            //this.props.navigation.navigate('Login');
        }
    }

    render() {
    return (
        <View style={{flex:1,backgroundColor:colors.primary, justifyContent: 'center', alignItems:'center'}}>
            <Text>
              Loading
            </Text>
        </View>
    );
  }
}
