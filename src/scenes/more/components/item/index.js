import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import { colors } from '../../../../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class Item extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let title = this.props.title;
        let icon = this.props.icon;
        return (
            <View style={styles.item}>
                <MaterialIcon name={icon} size={28} color={colors.light} style={styles.icon}/>
                <Text style={styles.text}>{title}</Text>
            </View>
        );
    }
}
