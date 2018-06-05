import React, { Component } from 'react';

import { View, Text, Image, TextInput, ScrollView, ScrollSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { colors } from '../../../styles';

import Video from '../components/videoDescription';
import Nav from '../../../components/navigation';
import Header from '../../../components/header';

export default class ListCurso extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.containerView}>
                <Header />
                <ScrollView contentContainerStyle={styles.videoList}>
                    <View style={styles.container}>
                        <Text style={styles.primaryTitle}>CURSO DE CAPACITAÇÃO</Text>

                        <Video />
                        <Video />
                        <Video />
                        <Video />
                    </View>
                </ScrollView>
                <Nav />
            </View>
        );
    }
}
