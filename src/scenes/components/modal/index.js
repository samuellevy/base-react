import React, { Component } from 'react';

import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { colors } from '../../../styles';

export default class Curso extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Modal animationType="fade" transparent={true} visible={true}>
                <View style={styles.modalContainer}>
                    <Text style={styles.boxTutle}>Modal</Text>
                </View>
            </Modal>
        );
    }
}