import React, { Component } from 'react';

import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, ListView, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../components/navigation/NavIcon';

import styles from './styles';
import api from '../../services/api';

var arrayQuest = new Array();

export default class Question extends Component {
    static navigationOptions = {
        header: null
    };
    state = {
        teste: '',
        question: [],
        btnSelected: 0,
        confirmBtn: false,
        modalVisible: false,
        quizSelect: 0,  
        finish: false,
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
                    {id: 1, name: 'Votoran22'},
                    {id: 2, name: 'Tupi2'},
                    {id: 3, name: 'Mauá2'},
                    {id: 4, name: 'CSN2'},
                    {id: 5, name: 'Holcim2'}
                ]
            },
            {
                id: 3,
                question: '3. Qual é o melhor cimento para obras internas?',
                answer: [
                    {id: 1, name: 'Votoran3'},
                    {id: 2, name: 'Tupi3'},
                    {id: 3, name: 'Mauá3'},
                    {id: 4, name: 'CSN3'},
                    {id: 5, name: 'Holcim3'}
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
            },
            {
                id: 5,
                question: '5. Qual é o melhor cimento para obras internas?',
                answer: [
                    {id: 1, name: 'Votoran'},
                    {id: 2, name: 'Tupi'},
                    {id: 3, name: 'Mauá'},
                    {id: 4, name: 'CSN'},
                    {id: 5, name: 'Holcim'}
                ]
            }
        ]
    }
    constructor (){
        super();
        this.getUserData();
        this.state.quizSelect = 0;
    }
    
    getUserData = async () => {
        try{
            const response = await api.get('/questions/get/2');
            var question = response.data.question;
            console.log(question)
            this.setState({question: response.data.question});
        } catch (response){
            this.setState({ errorMessage: response.data.message });
        }
    }

    getTitle() {
        var idArray = this.state.quizSelect;
        return (
            <Text style={styles.titleQuizBox}>{this.state.quest[idArray].question}</Text>  
        ) 
    }   

    getAnswer() {  
        return (
            <View style={{width: '100%'}}>
                {/* {this.state.quest.map(quest => {
                    let idBtn = 0;  
                    return ( 
                        <View style={{alignItems: 'center', paddingLeft: 15,paddingRight: 15}}>
                            { quest.id == this.state.quizSelect && quest.answer.map(answer => {
                                return <TouchableOpacity key={answer.id} style={[styles.btnQuestion, (this.state.btnSelected== answer.id)?styles.btnQuestionSelect:styles.btnQuestion]} onPress={() => this.setState({ btnSelected: answer.id, confirmBtn: true })} onClick={() => arrayQuest}><Text style={[styles.textQuestion, (this.state.btnSelected== answer.id)?styles.textQuestionSelect:'']}>{answer.name}</Text></TouchableOpacity>
                            })  
                            }
                        </View> 
                    )
                })} */}
                {this.state.question.map((quest, index) => {
                    let idBtn = 0;  
                    // console.log(quest)
                    return ( 
                        <View style={{alignItems: 'center', paddingLeft: 15,paddingRight: 15}}>
                            { index == this.state.quizSelect && quest.options.map(answer => {
                                return <TouchableOpacity key={answer.id} style={[styles.btnQuestion, (this.state.btnSelected== answer.id)?styles.btnQuestionSelect:styles.btnQuestion]} onPress={() => this.setState({ btnSelected: answer.id, confirmBtn: true })} onClick={() => arrayQuest}><Text style={[styles.textQuestion, (this.state.btnSelected== answer.id)?styles.textQuestionSelect:'']}>{answer.title}</Text></TouchableOpacity>
                            })  
                            }
                        </View> 
                    )
                })}
            </View>
        )
    } 

    getBullet() {  
        return (
            <View style={styles.contentSlider}>
                {this.state.question.map((quest,index )=> {
                    return <View style={styles.boxIcon}><MaterialIcon name="brightness-1" size={10} style={(this.state.quizSelect == index)?styles.iconSliderSelect:styles.iconSlider}></MaterialIcon></View>
                })}
            </View>
        )
    }

    setModalVisible(visible) { 
        this.setState({modalVisible: visible});
    }

    finishFunction() {
        if(this.state.finish) {
            return <Finish />;
        }
    }

    clickNext() {
        if(this.state.quizSelect == this.state.quest.length) {    
            this.setState({finish: true})
        } else { 
            this.setState({quizSelect: this.state.quizSelect + 1})
            this.setState({confirmBtn: false})
        }
    }  
    
    render() {
        console.log(this.state.question);
        return (
            // <View style={{margin: 40}}>
            //     <Text>{this.state.teste}ds</Text>
            // </View>
            <View style={styles.contentAll}> 
                {/* {this.getUserData()} */}
                {/* {this.finishFunction()} */}
                <View style={styles.contentModal}>
                    <TouchableOpacity style={styles.clearBtn} onPress={() => {this.setState({visibleModal: false})} }>
                        <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                    </TouchableOpacity>

                    <View style={styles.titleModulo}>
                        <Text style={styles.titleQuiz}>MÓDULO 03: CIMENTO CPII</Text>
                    </View>

                    <View style={styles.contentQuiz}>
                        <View style={styles.content}> 
                            {this.getTitle()}

                            {this.getAnswer()} 

                            <View style={styles.boxBtn}>
                                <TouchableOpacity style={[styles.btnConfirm, (this.state.btnSelected? styles.btnConfirmOk:'')]}  onPress={() => {this.clickNext()}}>
                                    <Text style={styles.textBtn}>CONFIRMAR RESPOSTA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {this.getBullet()} 
                </View>
            </View>
        );
    }
}
