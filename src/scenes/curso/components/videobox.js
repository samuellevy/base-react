import React, { Component } from 'react';
import {Text, View, WebView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

import Curse from '../index';

export default class VideoBox extends Component {

    accessVideo = () => {
        Curse: {screen: Curse}
    }

    render() {
        return(
            <View style={styles.video}>
                <Text style={styles.status}>{'Completo'.toUpperCase()}</Text>
                <View style = {styles.viewVideo}>
                    {/* <WebView source = {{ uri: 'https://www.youtube.com/embed/fBrOtR3pgPU' }} /> */}
                    <Image style={styles.thumbvideo} source={{ uri: 'http://img.youtube.com/vi/AbN7lbjOUho/maxresdefault.jpg'}}/>
                </View>

                <View style={styles.videoInfo}>
                    <Text style={styles.videoTitle}>MÓDULO</Text>
                    <Text style={styles.videoDescription}>Quais os diferentes tipos de cimento?</Text>
                    <TouchableOpacity onPress={this.accessVideo}>
                        <Text style={styles.videoButton}>ASSISTIR ></Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}