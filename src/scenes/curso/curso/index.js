import React, { Component } from 'react';

import { View, Text, Image, TextInput, ScrollView, ScrollSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { colors } from '../../../styles';

import Header from '../../components/header';
import Title from '../../components/title';
import Nav from '../../components/navigation';

export default class Curso extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <ScrollView contentContainerStyle={styles.cursoInfo}>
                    <View style={styles.containerCurso}>
                        <Title textContent={'CURSO DE CAPACITAÇÃO'} />
                    </View>
                </ScrollView>
                <Nav />
            </View>
        );
    }
}