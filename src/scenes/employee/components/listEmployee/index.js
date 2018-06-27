import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class Employee extends Component {
 
  	render() {
        let iconSelect = this.props.icon;
        let nameUser = this.props.nameUser;
        let mensager = this.props.mensager;
  
    	return ( 
			<View style={styles.container}> 
				<View style={styles.boxUser}>
                    <View style={styles.boxName}>
                        <Text style={styles.nameUser}>{nameUser}</Text>
                        <MaterialIcon name={!iconSelect ? "error" : "done"} size={15} style={!iconSelect ? styles.iconAlert : styles.iconDone} color={"#ddd"}></MaterialIcon>
                    </View>
                    
                    <Text style={styles.textInfo}>{mensager}</Text>
                </View>

                <View style={styles.boxIconEdit}>
                    <TouchableOpacity style={styles.clearBtn} onPress={() => {this.setState({visibleModal: false})} }>
                        <MaterialIcon name="create" size={25} style={styles.iconEdit}></MaterialIcon>
                    </TouchableOpacity>
                </View>
			</View>
	    ); 
  	}
}


