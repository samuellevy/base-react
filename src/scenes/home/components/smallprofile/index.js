import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class SmallProfile extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.name}>
                    Olá, Beatriz!
                </Text>
                <Text style={styles.store}>
                    Loja Golveia Construção
                </Text>
            </View>
        );
    }
}


