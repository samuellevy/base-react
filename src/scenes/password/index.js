import React, { Component } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, AsyncStorage, ScrollView, Platform } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { colors } from '../../styles';
import api from '../../services/api';

export default class Password extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        username: null,
        password: null,
        errorMessage: null,
        remember: false
    };

    componentDidMount = async () => {
        const user = await AsyncStorage.getItem('@CodeApi:user');
        const token = await AsyncStorage.getItem('@CodeApi:token');
        
        if(!!user) {
            this.setState({username:user});
        }else{

        }
    }
    
    signIn = async () => {
        AsyncStorage.clear();
        try{
            const response = await api.post('/users/token',{
                username: this.state.username,
                password: this.state.password
            });
            
            const { user, token } = response.data.data;
            console.log(this.state.remember);
            await AsyncStorage.multiSet([
                ['@CodeApi:token', token],
                ['@CodeApi:user', user],
                ['@CodeApi:remember', JSON.stringify(this.state.remember)]
            ]);

            this.props.navigation.navigate('Home');
        } catch (response){
            this.setState({ errorMessage: response.data.message });
        }
    }

    clickRemember = () => {
        if(this.state.remember){
            this.setState({remember: false});
        }else{
            this.setState({remember: true});
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <ScrollView scrollEnabled={Platform.OS == 'ios'?false:true}>
                <View style={styles.boxHello}>
                    <Image source={require('../../../assets/img/marca2.png')} style={styles.imgMarca}/>
                </View>
                <View style={styles.boxWelcome}>
                    <Text style={styles.txtWelcome}>Esqueceu sua senha?</Text>
                        <Text style={styles.txtInitial}>Insira seu e-mail abaixo para receber novamente sua senha pré-definida.</Text>
                </View>
                <View style={styles.boxLogin}>
                        <View style={styles.inputBox}>
                            <MaterialIcon name="mail" size={25} style={styles.inputIcon} />
                            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} placeholder='E-mail' autoCapitalize='none' placeholderTextColor={colors.light} onChangeText={username => this.setState({username})} value={this.state.username!=null?this.state.username:''}/>
                            { !!this.state.errorMessage && <Text style={styles.txtError}>{ this.state.errorMessage }</Text>}
                        </View>
                        <TouchableOpacity onPress={this.signIn} disabled={this.state.username!=null&&this.state.password!=null?false:true}>
                            <View style={[styles.boxButton, this.state.username!=null&&this.state.password!=null?{backgroundColor: colors.primary}:{backgroundColor: colors.gray}]}>
                                <Text style={styles.txtSign}>ENTRAR</Text>
                            </View>
                        </TouchableOpacity>
                </View>
            </ScrollView>
            </View>
        );
    }
} 
