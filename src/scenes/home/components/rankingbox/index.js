import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class RankingBox extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.box}>
                <View style={styles.split}>
                    <View style={[styles.splitTitleBox, styles.splitTitleBoxLeft]}>
                        <Text style={styles.splitTitle}>{'Ranking'.toUpperCase()}</Text>
                    </View>
                    <View style={styles.boxSplitText}>
                        <Text style={styles.splitText}>4º Lugar</Text>
                    </View>
                </View>
                <View style={styles.split}>
                    <View style={[styles.splitTitleBox, styles.splitTitleBoxRight]}>
                        <Text style={styles.splitTitle}>{'Pontuação'.toUpperCase()}</Text>
                    </View>
                    <Text style={[styles.splitText, styles.splitTextScore]}>360 pontos</Text>
                </View>
            </View>
        );
    }
}


