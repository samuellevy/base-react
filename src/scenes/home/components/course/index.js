import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

import styles from './styles';

export default class Course extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let color = this.props.color;
        return (
            <View style={styles.container}>
                <View style = {styles.viewVideo}>
                    <WebView source = {{ uri: 'https://www.youtube.com/embed/fBrOtR3pgPU' }} />
                </View>
                <View style = {styles.description}>
                    <Text style={[styles.title, { color: color }]}>
                        {'Módulo 3'.toUpperCase()}
                    </Text>
                    <Text style={styles.text}>
                        Cimento CP II: tudo o que você precisa saber
                    </Text>
                </View>
            </View>
        );
    }
}


