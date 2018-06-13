import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, ListView, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../components/navigation/NavIcon';
import styles from './styles';  

import { colors, metrics, fonts } from '../../styles';

export default class Quiz extends Component {
    
    contentTop = (video) => {
        if(video == null) {
            return 
            <View style={styles.icon}><MaterialIcon name={this.props.data.icon} size={25} style={styles.icon} color={this.props.data.iconColor}></MaterialIcon></View>
        } else {
            return <View style={styles.viewVideo}><WebView source={{ uri: video }} /></View>
        }
    }

    state = {
        btnSelected: 0,
        confirmBtn: false,
        modalVisible: false,
        quizSelect: 1,
        quest: [
            {
                id: 1,
                question: "1. Qual é o melhor cimento para obras internas?",
                answer: [
                    'Votoran',
                    'Tupi',
                    'Mauá',
                    'CSN',
                    'Holcim'
                ]
            },
            {
                id: 2,
                question: '2. Qual é o melhor cimento para obras internas?',
                answer: [
                    'Votoran',
                    'Tupi',
                    'Mauá',
                    'CSN',
                    'Holcim'
                ]
            },
            {
                id: 3,
                question: '3. Qual é o melhor cimento para obras internas?',
                answer: [
                    'Votoran',
                    'Tupi',
                    'Mauá',
                    'CSN',
                    'Holcim'
                ]
            },
            {
                id: 4,
                question: '4. Qual é o melhor cimento para obras internas?',
                answer: [
                    'Votoran',
                    'Tupi',
                    'Mauá',
                    'CSN',
                    'Holcim'
                ]
            }
        ]
    };

    getTitle() {
        this.state.quest.map((quest) => {
            if(quest.id == this.state.quizSelect) {
                return quest.question;
            }  
        });
    }

    getAnswer() {
        this.state.quest.map((quest) => {
            if(quest.id == this.state.quizSelect) {
                this.state.quest.answer.map((answer) => {
                    console.log(answer) 
                });
            }  
        });
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <Modal animationType="fade"    
            transparent={true}
            visible={this.state.visibleModal}
            onRequestClose={() => { this.visibleModal(false); } }> 

                <View style={styles.contentModal}>
                    <TouchableOpacity style={styles.clearBtn} onPress={() => {this.setState({visibleModal: false})} }>
                        <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                    </TouchableOpacity>

                    {this.getAnswer()}

                    <View style={styles.titleModulo}>
                        <Text style={styles.titleQuiz}>MÓDULO 03: CIMENTO CPII</Text>
                    </View>

                    <View style={styles.contentQuiz}>
                        <View style={styles.content}> 
                            <Text style={styles.titleQuizBox}>${this.getTitle()}</Text>

                            <View style={styles.contentList}>

                                <TouchableOpacity style={[styles.btnQuestion, (this.state.btnSelected== 1)?styles.btnQuestionSelect:styles.btnQuestion]} onPress={() => this.setState({ btnSelected: 1, confirmBtn: true })}>     
                                    <Text style={[styles.textQuestion, (this.state.btnSelected== 1)?styles.textQuestionSelect:'']}>Votoran</Text>
                                </TouchableOpacity> 
                                <TouchableOpacity style={[styles.btnQuestion, (this.state.btnSelected== 2)?styles.btnQuestionSelect:styles.btnQuestion]} onPress={() => this.setState({ btnSelected: 2, confirmBtn: true })}>
                                    <Text style={[styles.textQuestion, (this.state.btnSelected== 2)?styles.textQuestionSelect:'']}>Tupi</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnQuestion, (this.state.btnSelected== 3)?styles.btnQuestionSelect:styles.btnQuestion]} onPress={() => this.setState({ btnSelected: 3, confirmBtn: true })}>   
                                    <Text style={[styles.textQuestion, (this.state.btnSelected== 3)?styles.textQuestionSelect:'']}>Mauá</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnQuestion, (this.state.btnSelected== 4)?styles.btnQuestionSelect:styles.btnQuestion]} onPress={() => this.setState({ btnSelected: 4, confirmBtn: true })}>   
                                    <Text style={[styles.textQuestion, (this.state.btnSelected== 4)?styles.textQuestionSelect:'']}>CSN</Text> 
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnQuestion, (this.state.btnSelected== 5)?styles.btnQuestionSelect:styles.btnQuestion]} onPress={() => this.setState({ btnSelected: 5, confirmBtn: true })}>   
                                    <Text style={[styles.textQuestion, (this.state.btnSelected== 5)?styles.textQuestionSelect:'']}>Holcim</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.boxBtn}>
                                <TouchableOpacity style={[styles.btnConfirm, (this.state.btnSelected? styles.btnConfirmOk:'')]}>   
                                    <Text style={styles.textBtn}>CONFIRMAR RESPOSTA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
 
                    <View style={styles.contentSlider}> 
                        <View style={styles.boxIcon}>
                            <MaterialIcon name="brightness-1" size={10} style={[styles.iconSlider, styles.iconSliderSelect]}></MaterialIcon>
                        </View>
                        <View style={styles.boxIcon}>
                            <MaterialIcon name="brightness-1" size={10} style={styles.iconSlider}></MaterialIcon>
                        </View>
                        <View style={styles.boxIcon}>
                            <MaterialIcon name="brightness-1" size={10} style={styles.iconSlider}></MaterialIcon>
                        </View>
                        <View style={styles.boxIcon}>
                            <MaterialIcon name="brightness-1" size={10} style={styles.iconSlider}></MaterialIcon>
                        </View>
                        <View style={styles.boxIcon}>
                            <MaterialIcon name="brightness-1" size={10} style={styles.iconSlider}></MaterialIcon>
                        </View>
                    </View> 
                </View>
            </Modal>
        );
    }
}