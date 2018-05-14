import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Navigation from './Nav';

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Meu perfil'
    };

    render() {
        return (
            <View style={styles.container}>
            <Text> PROFILE </Text>
            <Navigation navigation={this.props.navigation}/>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Posts')}} style={styles.profileButton}>
                <Text> DOIS </Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 30
    }
});