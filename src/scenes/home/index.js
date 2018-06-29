import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavIcon from '../../components/navigation/NavIcon';
import styles from './styles';

import Header from '../../components/header';
import Nav from '../../components/navigation';
import SmallProfile from './components/smallprofile';
import RankingBox from './components/rankingbox';
import LastUpdate from './components/lastupdate';
import Performance from './components/performance';
import Course from './components/course';
import Blog from './components/blog';
import About from './components/about';
import Button from '../../components/button';
import { colors, metrics, fonts } from '../../styles';

import Card from './components/card';
import CardFooter from './components/cardfooter';

import api from '../../services/api';

export default class Home extends Component {
  static navigationOptions = {
    title: 'products',
    headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
  };

  state = {
    user:{
      name: null
    }
  };

  constructor (){
    super();
    this.getUserData();
  }

  getUserData = async () => {
    try{
        const response = await api.get('/users/me');
        const user = response.data.user;
        this.setState({user: user});
        // console.log(this.state.user.name);
       
    } catch (response){
        this.setState({ errorMessage: response.data.message });
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>

          <SmallProfile user={this.state.user}/>
          <RankingBox user={this.state.user}/>
          <LastUpdate/>

          <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Performance');}}>
            <Card title={'Desempenho'} icon={'today'} color={colors.blue}>
              <Performance/>
              <CardFooter color={colors.blue} url={() => { this.props.navigation.navigate('Performance'); this.setState({ screen: 'Performance' }) }}>{'Acompanhe o desempenho da loja'.toUpperCase()}</CardFooter>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Curso');}}>
            <Card title={'Curso de Capacitação'} icon={'video-library'} color={colors.yellow}>
              <Course/>
              <CardFooter>{'Ir para o módulo'.toUpperCase()}</CardFooter>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Curso');}}>
            <Card title={'Blog'} icon={'public'} color={colors.purple}>
              <Blog/>
              <View style={{paddingTop: 10, paddingBottom: 20}}>
                <TouchableOpacity onPress={this.signIn}>
                  <Button title={'Ir para o Blog'} size={60} color={colors.purple}/>
                </TouchableOpacity>
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('AboutCourse'); }}>
            <Card title={'Sobre o Programa'} icon={'info-outline'} color={colors.dark}>
              <About/>
              <CardFooter>{'Saiba mais'.toUpperCase()}</CardFooter>
            </Card>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}


