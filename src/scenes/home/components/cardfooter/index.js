import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class CardFooter extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let color   = this.props.color;
        const url = this.props.url;
        const {children} = this.props;
        return (
            <View style={styles.box}>
                <TouchableOpacity style={styles.button} onPress={url}>
                    <Text style={[styles.text, {color: color}]}>
                        {children}
                    </Text>
                    <MaterialIcon name="arrow-forward" size={16} style={[styles.icon, {color:color}]}></MaterialIcon>
                </TouchableOpacity>
            </View>
        );
    }
}
  

