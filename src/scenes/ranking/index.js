import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import styles from './styles';

import WinnerCard from './components/winnercard';

export default class Ranking extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ focused, tintColor }) => {
            return <NavIcon title={'Ranking'} icon={'star'} />;
        },
    };

    render() { 
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.rankingContent}>
                        <Text style={styles.rankingTitle}>
                            {'Ranking das lojas'.toUpperCase()}
                        </Text>
                        <WinnerCard color='color' title='title' image='1placegold' store='store' score='score'/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


