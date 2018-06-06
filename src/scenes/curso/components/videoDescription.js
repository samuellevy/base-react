import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  ScrollSheet,
  View,
  Image,
  Platform,
  WebView,
  TouchableOpacity,  
} from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

import Curse from '../listCurso';

export default class Video extends Component {

    accessVideo = () => {
        Curse: {screen: Curse}
    }

    render() {
        return(
            <View style={styles.video}>
                <View style = {styles.viewVideo}>
                    <WebView source = {{ uri: 'https://www.youtube.com/embed/fBrOtR3pgPU' }} />
                </View>

                <View style={styles.videoInfo}>
                    <Text style={styles.videoTitle}>MODÚLO</Text>
                    <Text style={styles.videoDescription}>Quais os diferentes tipos de cimento?</Text>
                    <TouchableOpacity onPress={this.accessVideo}>
                        <Text style={styles.videoButton}>ASSISTIR ></Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    video: {
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginBottom: 10,
    },
    viewVideo: {
        width: 150,
    },
    videoImage: {
        flex: 1,
    },
    videoInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingLeft: 10,
    },
    videoTitle: {
        fontWeight: 'bold',
        color: '#7B9995',
        fontSize: 12,
        paddingBottom: 10,
    },
    videoDescription: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 11,
        color: '#243331',
        fontFamily: fonts.main,
        fontWeight: 'normal',
        paddingBottom: 10,
    },
    videoButton: {
        color: '#14CC82',
        fontSize: 11,
    }
});