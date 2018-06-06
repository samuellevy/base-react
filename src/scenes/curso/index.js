import React, { Component } from 'react';

import { View, Text, Image, TextInput, ScrollView, ScrollSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { colors } from '../../styles';
import Title from '../../components/title/primary';

import Video from './components/videoDescription';

export default class ListCurso extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.containerView}>
                <ScrollView contentContainerStyle={styles.videoList}>
                    <View style={styles.container}>
                    <Title textContent="Curso de Capacitação"/>
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
