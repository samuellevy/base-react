import React, { Component } from 'react';

import { View, Text, TouchableHighlight } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class Navigation extends Component {
    render() {
    
    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <View style={styles.tabBtn}>
                    <MaterialIcon name="home" size={25} style={styles.icon} color={"#ddd"}></MaterialIcon>
                    <Text style={styles.title}>Home</Text>
                </View>
                <View style={styles.tabBtn}>
                    <MaterialIcon name="school" size={25} style={styles.icon} color={"#ddd"}></MaterialIcon>
                    <Text style={styles.title}>Curso</Text>
                </View>
                <View style={styles.tabBtn}>
<<<<<<< HEAD
                    <MaterialIcon name="today" size={25} style={styles.icon} color={"#ddd"}></MaterialIcon>
=======
                    <MaterialIcon name="home" size={25} style={styles.icon} color={"#ddd"}></MaterialIcon>
>>>>>>> 384437c437c83197dce23148aee2fae6c147fbb4
                    <Text style={styles.title}>Desempenho</Text>
                </View>
                <View style={styles.tabBtn}>
                    <MaterialIcon name="star-border" size={25} style={styles.icon} color={"#ddd"}></MaterialIcon>
                    <Text style={styles.title}>Rankin</Text>
                </View>
                <View style={styles.tabBtn}>
                    <MaterialIcon name="subject" size={25} style={styles.icon} color={"#ddd"}></MaterialIcon>
                    <Text style={styles.title}>Mais</Text>
                </View>
            </View>
        </View>
    );}
}