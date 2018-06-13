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
        titleQuestion: '',
        quest: [
            {
                id: 1,
                question: "1. Qual é o melhor cimento para obras internas?",
                answer: [
                    {id: 1, name: 'Votoran'},
                    {id: 2, name: 'Tupi'},
                    {id: 3, name: 'Mauá'},
                    {id: 4, name: 'CSN'},
                    {id: 5, name: 'Holcim'}
                ]
            },
            {
                id: 2,
                question: '2. Qual é o melhor cimento para obras internas?',
                answer: [
                    {id: 1, name: 'Votoran'},
                    {id: 2, name: 'Tupi'},
                    {id: 3, name: 'Mauá'},
                    {id: 4, name: 'CSN'},
                    {id: 5, name: 'Holcim'}
                ]
            },
            {
                id: 3,
                question: '3. Qual é o melhor cimento para obras internas?',
                answer: [
                    {id: 1, name: 'Votoran'},
                    {id: 2, name: 'Tupi'},
                    {id: 3, name: 'Mauá'},
                    {id: 4, name: 'CSN'},
                    {id: 5, name: 'Holcim'}
                ]
            },
            {
                id: 4,
                question: '4. Qual é o melhor cimento para obras internas?',
                answer: [
                    {id: 1, name: 'Votoran'},
                    {id: 2, name: 'Tupi'},
                    {id: 3, name: 'Mauá'},
                    {id: 4, name: 'CSN'},
                    {id: 5, name: 'Holcim'}
                ]
            }
        ]
    };

    getTitle() {
        return (
            <View>
                {this.state.quest.map(quest => {
                    return ( 
                        <View style={{alignItems: 'center', paddingLeft: 15,paddingRight: 15}}>
                            {(this.state.quizSelect== quest.id)?<Text style={styles.titleQuizBox}>{quest.question}</Text>:''}
                        </View> 
                    )
                })}
            </View>
        )
    }  

    getAnswer() {
        return (
            <View>
                {this.state.quest.map(quest => {
                    console.log(quest)
                    let idBtn = 0;  
                    return ( 
                        <View style={{alignItems: 'center', paddingLeft: 15,paddingRight: 15}}>
                            { quest.id == this.state.quizSelect && quest.answer.map(answer => {
                                console.log(answer.id)  
                                return <TouchableOpacity style={[styles.btnQuestion, (this.state.btnSelected== answer.id)?styles.btnQuestionSelect:styles.btnQuestion]} onPress={() => this.setState({ btnSelected: answer.id, confirmBtn: true })}><Text style={[styles.textQuestion, (this.state.btnSelected== answer.id)?styles.textQuestionSelect:'']}>{answer.name}</Text></TouchableOpacity>
                            }) 
                            }
                        </View> 
                    )
                })}
            </View>
        )
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

                    <View style={styles.titleModulo}>
                        <Text style={styles.titleQuiz}>MÓDULO 03: CIMENTO CPII</Text>
                    </View>
  
                    <View style={styles.contentQuiz}>
                        <View style={styles.content}> 
                            <Text style={styles.titleQuizBox}>4. Qual é o melhor cimento para obras internas?</Text>  
                            {/* {this.getTitle()} */}

                            {this.getAnswer()} 

                            <View style={styles.boxBtn}>
                                <TouchableOpacity style={[styles.btnConfirm, (this.state.btnSelected? styles.btnConfirmOk:'')]} onPress={() => {this.setState({quizSelect: (this.quizSelect + 1)})}}>   
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