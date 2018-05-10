import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class SMallProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infoBox}>
                    <Text style={styles.hello}>Olá, Beatriz!</Text>
                    <Text style={styles.unitname}>Loja 3aWorldwide</Text>
                    <Text style={styles.category}>Categoria B</Text>
                </View> 
                <View style={styles.performanceBox}>
                    <Text style={styles.performanceTitle}>DESEMPENHO</Text>
                    <Text style={styles.performanceValue}>1382 pts</Text>
                </View> 
            </View> 
        );
    }
}