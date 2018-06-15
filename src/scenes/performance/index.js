import React, { Component } from 'react';

import { View, ScrollView, Text } from 'react-native';
import NavIcon from '../../components/navigation/NavIcon';

import styles from './styles';

import General from './components/general';
import LastUpdate from './components/lastupdate';
import Sales from './components/sales';
import History from './components/history';

export default class Performance extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ focused, tintColor }) => {
            return <NavIcon title={'Desempenho'} icon={'today'}/>;
        },
    };
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    <Text style={styles.title}>
                        {'Desempenho'.toUpperCase()}
                    </Text>

                    <Text style={styles.subtitle}>Vendas Mensais</Text>
                    <Sales />
                    <Text style={styles.subtitle}>Desempenho Geral</Text>
                    <General />
                    <LastUpdate />
                    <Text style={styles.subtitle}>Histórico</Text>
                    <View style={styles.historyBox}>
                        <History child='not-last' date='08/18' description='Módulo completado' score='25'/>
                        <History child='not-last' date='07/18' description='Meta mensal atingida - 100%' score='50'/>
                        <History child='not-last' date='06/18' description='Módulo completado' score='100'/>
                        <History child='not-last' date='06/18' description='Cadastro de funcionários' score='25'/>
                        <History child='last' date='06/18' description='Módulo completado' score='20'/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
