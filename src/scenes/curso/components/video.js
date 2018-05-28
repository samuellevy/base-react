import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  ScrollSheet,
  View,
  Image,
  Platform,
  TouchableOpacity,  
} from 'react-native';

export default class Video extends Component {
    render() {
        return(
            <View style={styles.video}>
                <Image 
                    style={styles.videoImage}
                    source={{uri: 'https://dummyimage.com/192x103/000/fff.jpg&text=Video'}}
                />

                <View style={styles.videoInfo}>
                    <Text style={styles.videoTitle}>Modúlo</Text>
                    <Text style={styles.videoDescription}>Quais os diferentes tipos de cimento?</Text>
                    <TouchableOpacity onPress={() =>{}}>
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
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginBottom: 20,
    },
    videoImage: {
        flex: 1,
    },
    videoInfo: {
        marginLeft: 10,
    },
    videoTitle: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: 16,
    },
    videoDescription: {
        fontSize: 16,
        color: '#999',
        width: 170,
    },
    videoButton: {
        color: '#14CC82',
        fontSize: 12,
    }
});