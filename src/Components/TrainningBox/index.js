import React, { Component } from 'react';

import { View, Text, Image, WebView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class TrainningBox extends Component {
    render() {
        return (
            <View>
                <View style={styles.iconBox}>
                    <Icon name="video-library" size={30} styles={styles.iconVideo} color={"white"}></Icon>
                </View>
                <View>
                    <Text style={styles.title}>S</Text>
                    <Text style={styles.description}>A</Text>
                    <View style = {{width:"100%", height: 200}}>
                        <WebView source = {{ uri: 'https://www.youtube.com/embed/fBrOtR3pgPU' }} />
                    </View>
                </View>
            </View>
        );
    }
}
