import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
const timer = require('react-native-timer');
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../components/navigation/NavIcon';
import styles from './styles';

import Header from '../../components/header';
import Nav from '../../components/navigation';

import TitleTop from '../../components/title/primary';
import ListUser from './components/listEmployee';

export default class Employee extends Component {
  	static navigationOptions = {
    	title: 'products',
    	headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
	};

	state = {
		id: 1,
		arrayUser: [
			{
				id: 1,
				email:"admin@3aworldwide.com.br",
				loja:"3aW",
				name:"Admin dev",
				phone:"2122711700",
				pontuacao:"510",
				ranking:"4",
				username:"admin",
			},
			{
				id: 2,
				email:"admin@3aworldwide.com.br",
				loja:"3aW",
				name:"Admin dev",
				phone:"2122711700",
				pontuacao:"510",
				ranking:"4",
				username:"admin",
			},
			{
				id: 3,
				email:"admin@3aworldwide.com.br",
				loja:"3aW",
				name:"Admin dev",
				phone:"2122711700",
				pontuacao:"510",
				ranking:"4",
				username:"admin",
			},
			{
				id: 4,
				email:"admin@3aworldwide.com.br",
				loja:"3aW",
				name:"Admin dev",
				phone:"2122711700",
				pontuacao:"510",
				ranking:"4",
				username:"admin",
			}
		]
	}
	  
  	render() { 
    	return (   
			<View style={styles.container}>   
				<ScrollView style={{marginBottom: 50, padding: 18}}>
					<TitleTop textContent={'FUNCIONÁRIOS'} />
 
					<View style={styles.addEmplayee}>
						<TouchableOpacity style={styles.addBtn} onPress={() => { this.props.navigation.navigate('addEmployee'); this.setState({ screen: 'addEmployee' }) }}>
							<View style={styles.boxIcon}>
								<MaterialIcon name="add" size={15} style={styles.iconClear}></MaterialIcon>
							</View>
							<Text style={styles.textBtn}>ADICIONAR FUNCIONÁRIO</Text>
						</TouchableOpacity>
					</View> 
					   
					<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('addEmployee');}}>
						<ListUser icon={true} nameUser="Ronald Junger" mensager="Todos os módulos foram completos!" />
					</TouchableOpacity>
					{/* <ListUser icon={false} idUser={2} nameUser="Kayalla Pontes" mensager="Nunca acessou ao curso!" navigator={() => {this.props.navigation.navigate('addEmployee', this.state.id);}}/>
					<ListUser icon={false} idUser={3} nameUser="Samuel Levy" mensager="Ainda não completou o módulo desse mês." navigator={() => {this.props.navigation.navigate('addEmployee', this.state.id);}}/>
					<ListUser icon={false} idUser={4} nameUser="Vinicius Machado" mensager="Está atrasado no curso: faltam 2 módulos!" navigator={() => {this.props.navigation.navigate('addEmployee', this.state.id);}}/> */}
				</ScrollView>
			</View>
	    ); 
  	}
}


