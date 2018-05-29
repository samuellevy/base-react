import React, { Component } from 'react';

import { View, Text, Image, TextInput, ScrollView, ScrollSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { colors } from '../../styles';

import Video from './components/video';
import Nav from '../components/navigation';

export default class Curso extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.containerView}>
                <ScrollView contentContainerStyle={styles.repoList}>
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
