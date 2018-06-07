import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

import Item from './components/item';

export default class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Item icon={'create'} title={'Editar perfil'}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Item icon={'people-outline'} title={'Funcionários'}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Item icon={'home'} title={'Sobre o programa'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Rule'); this.setState({ screen: 'rule' }) }}>
          <Item icon={'home'} title={'Regulamento'}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Item icon={'home'} title={'Blog'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Contact'); this.setState({ screen: 'contact' }) }}>
          <Item icon={'home'} title={'Fale conosco'}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Item icon={'home'} title={'Sair'}/>
        </TouchableOpacity>
      </View>
    );
  }
}