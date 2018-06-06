import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ART, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavIcon from '../../components/navigation/NavIcon';
import styles from './styles';

import Pie from  'react-native-pie';
import TitleTop from '../../components/title/primaryTitle';


export default class Home extends Component {
	static navigationOptions = {
	}	
		
	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={{marginBottom: 50}}>
					<TitleTop textContent={'FUNCIONÁRIOSs'} />
				</ScrollView>
			</View>
		);
	}
};