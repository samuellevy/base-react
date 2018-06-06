import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ART, Platform } from 'react-native';
import styles from './styles';

import Pie from  'react-native-pie';


export default class Home extends Component {
	static navigationOptions = {
    }
		
	render() {
        let percent = this.props.percent;
		return ( 
			<View style={styles.container}>
				<View>
					<Pie
						radius={50} 
						innerRadius={35}
						series={[percent]} 
                        colors={['#00A6E3']}
						backgroundColor='#ddd' />
					
					<View style={styles.gauge}>
						<Text style={styles.gaugeText}>{percent}%</Text>
					</View>
				</View>
			</View>
		);
	}
};