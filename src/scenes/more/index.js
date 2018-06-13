import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

import Item from './components/item';

export default class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.border}>
          <TouchableOpacity>
            <Item icon={'border-color'} title={'Editar perfil'}/>
          </TouchableOpacity>
        </View>
        <View style={styles.border}>
          <TouchableOpacity>
            <Item icon={'account-multiple-outline'} title={'Funcionários'}/>
          </TouchableOpacity>
        </View>
        <View style={styles.border}>
          <TouchableOpacity>
            <Item icon={'information-outline'} title={'Sobre o programa'}/>
          </TouchableOpacity>
        </View>
        <View style={styles.border}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Rule'); this.setState({ screen: 'rule' }) }}>
            <Item icon={'file-document-box'} title={'Regulamento'}/>
          </TouchableOpacity>
        </View>
        <View style={styles.border}>
          <TouchableOpacity>
            <Item icon={'earth'} title={'Blog'}/>
          </TouchableOpacity>
        </View>
        <View style={styles.border}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Contact'); this.setState({ screen: 'contact' }) }}>
            <Item icon={'comment-outline'} title={'Fale conosco'}/>
          </TouchableOpacity>
        </View>
        <View style={styles.border}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login'); }}>
            <Item icon={'export'} title={'Sair'}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}