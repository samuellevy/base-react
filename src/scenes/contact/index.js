import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../../styles';

import { View } from 'react-native';
import Title from '../../components/title/primary';
import Button from '../../components/button';

import styles from './styles';

export default class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Title textContent="Fale Conosco"/>
          <Text style={styles.txtDescription}>Possui algum comentário, dúvida ou sugestão? Entre em contato com a gente!</Text>
          <TextInput style={styles.contactForm} placeholder="Enter password" placeholderTextColor="white"/>
        </View>
        <View style={styles.boxSend}>
          <TouchableOpacity onPress={this.signIn}>
            <Button title={'Enviar mensagem'} size={60} color={colors.regular}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}