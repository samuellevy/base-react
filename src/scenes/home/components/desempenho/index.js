import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import InfoboxTitle from '../infoboxtitle';

export default class Desempenho extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <InfoboxTitle/>
                <View style={styles.box}>
                    <View style={styles.splitLeft}>
                        <Text style={styles.text}>Falta apenas <Text style={{ fontWeight: "bold" }}>20%</Text> para sua loja completar a meta do mês!</Text>
                        <Text style={styles.dateTitle}>{'Agosto de 2018'.toUpperCase()}</Text>
                        <View style={styles.table}>
                            <View>
                                <Text style={styles.tableTitle}>Meta do mês</Text>
                                <Text style={styles.tableText}>56 sacos</Text>
                            </View>
                            <View>
                                <Text style={styles.tableTitle}>Vendas</Text>
                                <Text style={styles.tableText}>48 sacos</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.splitRight}>

                    </View>
                </View>
            </View>
        );
    }
}


