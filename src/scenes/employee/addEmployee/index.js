import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../../components/navigation/NavIcon';
import styles from './styles';
import { colors, metrics, fonts } from '../../../styles';

import Header from '../../../components/header';
import Nav from '../../../components/navigation';
import AlertBox from '../components/alert';

import TitleTop from '../../../components/title/primaryTitle';

export default class addEmployee extends Component {
  	static navigationOptions = {
    	title: 'products',
    	headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
      };
      
    constructor(props) {
        super(props);
        this.state = { 
            nome: '',
            cpf: '',
            email: '',
         };
    }
   
  	render() {
    	return (            
			<View style={styles.container}>
                <AlertBox /> 

                <TitleTop textContent={'ADINIONAR FUNCIONÁRIOS'} />

                <View style={styles.contentAddUser}>  
                    <View style={styles.boxInput}> 
                        <Text style={styles.inputText}>NOME</Text>
                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(nome) => this.setState({nome})} value={this.state.nome} placeholderTextColor={colors.textColor}/>
                    </View>
                    <View style={styles.boxInput}> 
                        <Text style={styles.inputText}>CPF</Text>
                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(cpf) => this.setState({cpf})} value={this.state.cpf} placeholderTextColor={colors.textColor}/>
                    </View>
                    <View style={styles.boxInput}> 
                        <Text style={styles.inputText}>E-MAIL</Text>
                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(email) => this.setState({email})} value={this.state.email} placeholderTextColor={colors.textColor}/>
                    </View>
                </View>

                <View style={styles.addEmplayee}>
                    <TouchableOpacity style={styles.addBtn} onPress={() => {this.setState({visibleModal: false})} }>
                        <View style={styles.boxIcon}>
                            <MaterialIcon name="add" size={15} style={styles.iconClear}></MaterialIcon>
                        </View>
                        <Text style={styles.textBtn}>ADICIONAR FUNCIONÁRIO</Text>
                    </TouchableOpacity>
                </View> 
			</View>
	    );  
  	}
}