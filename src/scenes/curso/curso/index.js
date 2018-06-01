import React, { Component } from 'react';

import { View, Text, Image, TextInput, ScrollView, ScrollSheet, WebView, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { colors } from '../../../styles';

import Header from '../../components/header';
import Title from '../../components/title/primaryTitle';
import TitleSec from '../../components/title/secondaryTitle';
import Nav from '../../components/navigation';
import ModalBox from '../../components/modal';

export default class Curso extends Component {
    static navigationOptions = {
        header: null
    };

    render() {

        const testStart = null;

        testOpen = () => {
            if(testStart == null) {
                return <ModalBox />
            } else {
                return <ModalBox />
            }
        }

        return (
            <View style={styles.container}>
                <Header />

                <ScrollView contentContainerStyle={styles.cursoInfo}>
                    <View style={styles.containerCurso}>
                        <View style={styles.boxTitle}>
                            <Title textContent={'CURSO DE CAPACITAÇÃO'} />
                        </View>
                        <TitleSec textContent={'MÓDULO 03'} />

                        <Text style={styles.infoCurse}>
                            Cimento CP II: tudo o que você precisa saber                     
                        </Text>

                        <Text style={styles.description}>
                            Conheça a categoria de cimentos ideal para obras internas e acabamento.                   
                        </Text>

                        <View style = {styles.viewVideo}>
                            <WebView source = {{ uri: 'https://www.youtube.com/embed/fBrOtR3pgPU' }} />
                        </View>

                        <View style={styles.boxTest}>
                            <TouchableOpacity style={this.testStart ? styles.startTestActive : styles.startTest} onPress={this.testOpen}>
                                {/* <Text style={this.testStart ? 'styles.textBtnActive' : ' styles.textBtn'}>FAZER O TESTE</Text> */}
                                <Text style={styles.textBtn}>FAZER O TESTE</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <Nav />
            </View>
        );
    }
}