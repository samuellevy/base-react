import React, { Component } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, AsyncStorage, ScrollView, Platform } from 'react-native';
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
        errorMessage: null,
        save: false
    };

    componentDidMount = async () => {
        const token = await AsyncStorage.getItem('@CodeApi:token');
        if(token) {
            console.log(token);
            this.props.navigation.navigate('Home');
        }
    }
    
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
            <ScrollView scrollEnabled={Platform.OS == 'ios'?false:true}>
            <View style={styles.container}>
                <View style={styles.boxHello}>
                    <Image source={require('../../../assets/img/marca2.png')} style={styles.imgMarca}/>
                </View>
                <View style={styles.boxWelcome}>
                    <Text style={styles.txtWelcome}>Bem-vindo! :)</Text>
                    <Text style={styles.txtInitial}>Para começar, insira abaixo seu CPF e a senha.</Text>
                </View>
                <View style={styles.boxLogin}>
                        <View style={styles.inputBox}>
                            <MaterialIcon name="person" size={25} style={styles.inputIcon} />
                            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} placeholder='E-mail' autoCapitalize='none' placeholderTextColor={colors.light} onChangeText={username => this.setState({username})} value={this.state.username!=null?this.state.username:''}/>
                            { !!this.state.errorMessage && <Text style={styles.txtError}>{ this.state.errorMessage }</Text>}
                        </View>
                        <View style={styles.inputBox}>
                            <MaterialIcon name="lock" size={25} style={styles.inputIcon} />
                            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} placeholder='Senha' autoCapitalize='none' placeholderTextColor={colors.light} onChangeText={password => this.setState({password})} secureTextEntry={true}/>
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
            </ScrollView>
        );
    }
}
