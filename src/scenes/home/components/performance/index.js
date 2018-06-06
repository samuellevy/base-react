import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import Pie from '../../../../components/pie';
const timer = require('react-native-timer');

export default class Performance extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        testeState: 0
    };
    
    testBtn = () => {
        this.setState({testeState: this.state.testeState}, () => timer.setInterval(
            this, 'hideMsg', () => 
            {
                if(this.state.testeState != 80){
                    this.setState({testeState: this.state.testeState+5})
                }
            }
            , 10
        ));
    }

    render() {
        return (
            <View style={styles.container}>
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
                <TouchableOpacity onPress={() => this.testBtn()}>
                    <View style={styles.splitRight}>
                        <Pie percent={this.state.testeState}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


