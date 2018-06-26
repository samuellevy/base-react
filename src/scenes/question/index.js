import React, { Component } from 'react';

import { View,Text } from 'react-native';

import styles from './styles';
import api from '../../services/api';

export default class Question extends Component {
    static navigationOptions = {
        header: null
    };
    state = {
        teste: '',
        question: [
            
        ]
    }
    constructor (){
        super();
        this.getUserData();
    }
    
    
    getUserData = async () => {
        try{
            const response = await api.get('/questions/get/1');
            const question = response.data.question;
            this.setState({question: response.data.question});
        } catch (response){
            alert('teste');
            this.setState({ errorMessage: response.data.message });
        }
    }
    
    render() {
        console.log(this.state.question);
        return (
            <View style={{margin: 40}}>
                <Text>{this.state.teste}ds</Text>
            </View>
        );
    }
}
