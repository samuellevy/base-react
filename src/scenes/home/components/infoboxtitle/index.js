import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class InfoboxTitle extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.box}>
                <View style={styles.circle}>
                    
                </View>
                <Text style={styles.title}>{'Desempenho'.toUpperCase()}</Text>
            </View>
        );
    }
}


