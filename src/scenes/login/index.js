import React, { Component } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { colors } from '../../styles';
import api from '../../services/api';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        username: null,
        password: null,
        errorMessage: null
    };
    
    signIn = async () => {
        // AsyncStorage.clear();
        console.log(this.state.username);
        try{
            const response = await api.post('/users/token',{
                username: this.state.username,
                password: this.state.password
            });
            
            const { user, token } = response.data.data;

            await AsyncStorage.multiSet([
                ['@CodeApi:token', token],
                ['@CodeApi:user', JSON.stringify(user)]
            ]);

            this.props.navigation.navigate('Home');
        } catch (response){
            this.setState({ errorMessage: response.data.message });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxHello}>
                    <Text style={styles.txtHello}>Olá!</Text>
                    <Image source={require('../../../assets/img/marca.png')} style={styles.imgMarca}/>
                </View>
                <View style={styles.boxWelcome}>
                    <Text style={styles.txtWelcome}>Bem-vindo ao</Text>
                    <Text style={styles.txtWelcome}>Programa de Incentivo Cimento Mauá</Text>
                </View>
                <View style={styles.boxLogin}>
                    <Text style={styles.txtInitial}>Para começar, insira abaixo seu CPF e a senha que foi enviada para o seu e-mail.</Text>
                    <View style={styles.inputBox}>
                        <MaterialIcon name="person" size={25} style={styles.inputIcon} />
                        <TextInput style={styles.input} value='' placeholder='CPF' placeholderTextColor={colors.light} onChangeText={username => this.setState({username})}/>
                        { !!this.state.errorMessage && <Text style={styles.txtError}>{ this.state.errorMessage }</Text>}
                    </View>
                    <View style={styles.inputBox}>
                        <MaterialIcon name="lock" size={25} style={styles.inputIcon} />
                        <TextInput style={styles.input} value='' placeholder='Senha' placeholderTextColor={colors.light} onChangeText={password => this.setState({password})}/>
                    </View>
                    <View style={styles.boxCheck}>
                        <MaterialIcon name="check-box-outline-blank" size={25} style={styles.checkIcon} />
                        <Text style={styles.txtKeep}>Mantenha-me conectado</Text>
                    </View>
                    <TouchableOpacity onPress={this.signIn}>
                        <View style={styles.boxButton}>
                            <Text style={styles.txtSign}>ENTRAR</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.txtForgot}>ESQUECI MINHA SENHA</Text>
                </View>
            </View>
        );
    }
}
