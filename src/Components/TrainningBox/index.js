import React, { Component } from 'react';

import { View, Text, Image, WebView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class TrainningBox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerBox}>
                    <View style={styles.iconBox}>
                        <Icon name="video-library" size={30} style={styles.iconVideo}></Icon>
                    </View>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>MÓDULOS DE CAPACITAÇÃO</Text>
                        <Text style={styles.description}>Módulo 3: Cimento CP II - tudo o que você precisa saber sobre</Text>
                    </View>
                </View>
                <View style = {{width:"100%", height: 200}}>
                    <WebView source = {{ uri: 'https://www.youtube.com/embed/fBrOtR3pgPU' }} />
                </View>
            </View>
        );
    }
}
