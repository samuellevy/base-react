import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
const timer = require('react-native-timer');
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../components/navigation/NavIcon';
import styles from './styles';

import Header from '../../components/header';
import Nav from '../../components/navigation';

import TitleTop from '../../components/title/primaryTitle';
import ListUser from './components/listEmployee';

export default class Employee extends Component {
  	static navigationOptions = {
    	title: 'products',
    	headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
	};
	  
  	render() { 
    	return (   
			<View style={styles.container}>   
				<ScrollView style={{marginBottom: 50, padding: 18}}>
					<TitleTop textContent={'FUNCIONÁRIOS'} />
 
					<View style={styles.addEmplayee}>
						<TouchableOpacity style={styles.addBtn} onPress={() => {this.setState({visibleModal: false})} }>
							<View style={styles.boxIcon}>
								<MaterialIcon name="add" size={15} style={styles.iconClear}></MaterialIcon>
							</View>
							<Text style={styles.textBtn}>ADICIONAR FUNCIONÁRIO</Text>
						</TouchableOpacity>
					</View> 
					 
					<ListUser icon={true} nameUser="Ronald Junger" mensager="Todos os módulos foram completos!"/>
					<ListUser icon={false} nameUser="Kayalla Pontes" mensager="Nunca acessou ao curso!"/>
					<ListUser icon={false} nameUser="Samuel Levy" mensager="Ainda não completou o módulo desse mês."/>
					<ListUser icon={false} nameUser="Vinicius Machado" mensager="Está atrasado no curso: faltam 2 módulos!"/>
				</ScrollView>
			</View>
	    ); 
  	}
}


