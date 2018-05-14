import React, { Component } from 'react';
import {  View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Post from './components/Post';

export default class Posts extends Component {
    static navigationOptions = {
        title: 'Posts'
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Profile')}} style={styles.profileButton}>
                    <Text> Meu profile </Text>
                </TouchableOpacity>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
    },
    profileButton:{
        backgroundColor: 'tomato',
        padding: 15
    }

});