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
                <ScrollView>
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
                        <History date='08/18' description='Módulo completado' score='25'/>
                        <History date='08/18' description='Módulo completado' score='25'/>
                        <History date='08/18' description='Módulo completado' score='25'/>
                        <History date='08/18' description='Módulo completado' score='25'/>
                        <History date='08/18' description='Módulo completado' score='25'/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
