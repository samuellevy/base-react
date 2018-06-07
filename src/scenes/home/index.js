import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavIcon from '../../components/navigation/NavIcon';
import styles from './styles';

import Header from '../../components/header';
import Nav from '../../components/navigation';
import SmallProfile from './components/smallprofile';
import RankingBox from './components/rankingbox';
import LastUpdate from './components/lastupdate';
import Performance from './components/performance';
import { colors, metrics, fonts } from '../../styles';

import Card from './components/card';
import CardFooter from './components/cardfooter';

export default class Home extends Component {
  static navigationOptions = {
    title: 'products',
    headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
  };
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{marginBottom: 50}}>
          <SmallProfile/>
          <RankingBox/>
          <LastUpdate/>

          <Card title={'Desempenho'} icon={'today'} color={colors.blue}>
            <Performance/>
            <CardFooter color={colors.blue}>{'Acompanhe o desempenho da loja'.toUpperCase()}</CardFooter>
          </Card>

          <Card title={'Curso de Capacitação'} icon={'video-library'} color={colors.yellow}>
            <CardFooter>{'Ir para o módulo'.toUpperCase()}</CardFooter>
          </Card>

          <Card title={'Blog'} icon={'public'} color={colors.purple}>
            <CardFooter>{'Ir para o módulo'.toUpperCase()}</CardFooter>
          </Card>

          <Card title={'Sobre o Programa'} icon={'info-outline'} color={colors.dark}>
            <CardFooter>{'Saiba mais'.toUpperCase()}</CardFooter>
          </Card>
        </ScrollView>
      </View>
    );
  }
}


