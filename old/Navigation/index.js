import React, { Component } from 'react';

import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class Navigation extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <View style={styles.tabBtn}>
            <Icon name="home" size={25} style={styles.icon} color={"#ddd"}></Icon>
            <Text style={styles.title}>Home</Text>
          </View>
          <View style={styles.tabBtn}>
            <Icon name="video-library" size={25} style={styles.icon} color={"#ddd"}></Icon>
            <Text style={styles.title}>Módulos</Text>
          </View>
          <View style={styles.tabBtn}>
            <Icon name="trending-up" size={25} style={styles.icon} color={"#ddd"}></Icon>
            <Text style={styles.title}>Desempenho</Text>
          </View>
          <View style={styles.tabBtn}>
            <Icon name="star" size={25} style={styles.icon} color={"#ddd"}></Icon>
            <Text style={styles.title}>Prêmios</Text>
          </View>
          <View style={styles.tabBtn}>
            <Icon name="person" size={25} style={styles.icon} color={"#ddd"}></Icon>
            <Text style={styles.title}>Perfil</Text>
          </View>
        </View>
      </View>
    );
  }
}
