import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import styles from './styles';

export default class Rule extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/img/marca2.png')}
                    />
                    </View>
                </View>
                <ScrollView style={styles.ruleContent}>
                    <Text style={styles.ruleTitle}>
                        {'Regulamento'.toUpperCase()}
 
                    </Text>
                    <Text style={styles.ruleParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mauris molestie, vestibulum nibh eu, finibus sem. 
                    </Text>
                    <Text style={styles.ruleParagraph}>
                        Quisque hendrerit feugiat nisl, eu gravida dolor tincidunt et. Nam gravida mattis tellus et elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed venenatis a nibh ut posuere. Suspendisse malesuada sed nibh sit amet pretium. Donec euismod volutpat tempor. Vivamus tristique interdum feugiat. Fusce aliquet sem mi, sed condimentum velit commodo sit amet. Nunc felis ipsum, scelerisque non condimentum ac, volutpat quis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet tellus id nulla ullamcorper finibus. 
                    </Text>
                    <Text style={styles.ruleParagraph}>
                        In tempus, risus quis ullamcorper sodales, ante odio blandit ligula, euismod rutrum quam sem auctor tellus. Ut faucibus diam a semper faucibus.
                    </Text>
                    <Text style={styles.ruleParagraph}>
                        Phasellus ligula arcu, imperdiet faucibus risus ac, egestas convallis lectus. In arcu felis, euismod quis urna quis, mollis dignissim felis. Ut aliquam cursus lacus, in condimentum odio lobortis rhoncus. Fusce et feugiat enim, non hendrerit justo. Sed scelerisque, mi non fringilla consectetur, leo ipsum rhoncus justo, a finibus magna leo vitae lectus. Proin elit ipsum, porta vestibulum turpis eget, imperdiet sagittis lorem. Quisque vitae massa eu quam mattis pharetra at nec eros. Curabitur velit erat, vestibulum ut vestibulum vel, maximus eu mi. Suspendisse potenti. Sed vestibulum velit mi.
                    </Text>
                    <Text style={styles.ruleParagraph}>
                        Phasellus ligula arcu, imperdiet faucibus risus ac, egestas convallis lectus. In arcu felis, euismod quis urna quis, mollis dignissim felis. Ut aliquam cursus lacus, in condimentum odio lobortis rhoncus. Fusce et feugiat enim, non hendrerit justo. Sed scelerisque, mi non fringilla consectetur, leo ipsum rhoncus justo, a finibus magna leo vitae lectus. Proin elit ipsum, porta vestibulum turpis eget, imperdiet sagittis lorem. Quisque vitae massa eu quam mattis pharetra at nec eros. Curabitur velit erat, vestibulum ut vestibulum vel, maximus eu mi. Suspendisse potenti. Sed vestibulum velit mi.
                    </Text>
                </ScrollView>
            </View>
        );
    }
}


