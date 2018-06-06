import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class CardHeader extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.box}>
                <View style={styles.circle}>
                    <MaterialIcon name="today" size={25} style={styles.icon} color={"#fff"}></MaterialIcon>
                </View>
                <Text style={styles.title}>{'Desempenho'.toUpperCase()}</Text>
            </View>
        );
    }
}


