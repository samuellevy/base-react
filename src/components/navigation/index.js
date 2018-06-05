import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class Navigation extends Component {

    changeScreen = () => {
        console.log('tes');
    }

    render() {
    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <View style={styles.tabBtn}>
                        <MaterialIcon name="home" size={25} style={styles.icon} color={"#ddd"}></MaterialIcon>
                        <Text style={styles.title}>Home</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Curso')}>
                    <View style={styles.tabBtn}>
                        <MaterialIcon name="school" size={25} style={styles.icon} color={"#ddd"}></MaterialIcon>
                        <Text style={styles.title}>Curso</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.tabBtn}>
                    <MaterialIcon name="today" size={25} style={styles.icon} color={"#ddd"}></MaterialIcon>
                    <Text style={styles.title}>Desempenho</Text>
                </View>

                <View style={styles.tabBtn}>
                    <MaterialIcon name="star-border" size={25} style={styles.icon} color={"#ddd"}></MaterialIcon>
                    <Text style={styles.title}>Ranking</Text>
                </View>
                
                <View style={styles.tabBtn}>
                    <MaterialIcon name="subject" size={25} style={styles.icon} color={"#ddd"}></MaterialIcon>
                    <Text style={styles.title}>Mais</Text>
                </View>
            </View>
        </View>
    );}
}