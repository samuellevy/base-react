import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class InfoBox extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.box}>
                <View style={styles.splitLeft}>
                    <Text style={styles.text}>Falta apenas 20% para sua loja completar a meta do mês!</Text>
                    <Text style={styles.tableTitle}>{'Agosto de 2018'.toUpperCase()}</Text>
                    <View style={styles.table}>
                        <View style={styles.split}>
                            <Text style={styles.splitTitle}>Meta do mês</Text>
                            <Text style={styles.splitText}>56 sacos</Text>
                        </View>
                        <View style={styles.split}>
                            <Text style={styles.splitTitle}>Vendas</Text>
                            <Text style={styles.splitText}>48 sacos</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.splitRight}>

                </View>
            </View>
        );
    }
}


