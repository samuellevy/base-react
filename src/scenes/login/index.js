import React, { Component } from 'react';

import { View, Text, Image, TextInput } from 'react-native';
import styles from './styles';


export default class Login extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxHello}>
                    <Text style={styles.txtHello}>Olá!</Text>
                    <Image source={require('../../../assets/img/marca.png')} style={styles.imgMarca}/>
                </View>
                <View style={styles.boxDescription}>
                    <Text style={styles.txtDescription}>Bem-vindo ao</Text>
                    <Text style={styles.txtDescription}>Programa de Incentivo Cimento Mauá</Text>
                </View>
                <View style={styles.boxLogin}>
                <TextInput
                    style={styles.input}
                    value=''
                />
                <TextInput
                    style={styles.input}
                    value=''
                />
                </View>
            </View>
        );
    }
}
