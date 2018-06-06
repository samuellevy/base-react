import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class CardFooter extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.box}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>{'Acompanhe o desempenho da loja'.toUpperCase()}</Text>
                    <MaterialIcon name="arrow-forward" size={16} style={styles.icon}></MaterialIcon>
                </TouchableOpacity>
            </View>
        );
    }
}


