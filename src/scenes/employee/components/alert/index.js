import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class Alert extends Component {
 
  	render() {
    	return ( 
			<View style={styles.contentAlert}>
                <View style={styles.boxAlert}>
                    <View style={styles.boxIcon}>
                        <MaterialIcon name="done" size={15} style={styles.iconClear}></MaterialIcon>
                    </View>
  
                    <Text style={styles.textAlert}>Alterações salvas!</Text>
                </View>
            </View>
	    ); 
  	}
}


