import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export default class Header extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../../assets/img/marca2.png')}
                    />
                </View>
            </View>
        );
    }
}


