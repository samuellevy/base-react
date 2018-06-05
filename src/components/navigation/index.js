import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from './NavIcon';
import Header from '../header';

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
                    <NavIcon title={'Home'} icon={'home'}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Curso')}>
                    <NavIcon title={'Curso'} icon={'school'}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Performance')}>
                    <NavIcon title={'Desempenho'} icon={'today'}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Ranking')}>
                    <NavIcon title={'Ranking'} icon={'star-border'}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz')}>
                    <NavIcon title={'Mais'} icon={'subject'}/>
                </TouchableOpacity>
            </View>
        </View>
    );}
}