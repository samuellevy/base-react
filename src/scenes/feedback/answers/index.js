import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../styles';

import { View } from 'react-native';
import Title from '../../../components/title/primary';
import Button from '../../../components/button';

import styles from './styles';

export default class Answers extends Component {
    state = {
        message: null,
    };

    render() { 
        return (
            <ScrollView style={styles.scrollContent}>
                <View style={styles.container}>
                    <Title textContent={"CURSO DE CAPACITAÇÃO"} />
                    <Text style={styles.title}>Módulo 03: Cimento CPII</Text>
                    

                    <View style={styles.formAnswers}>
                        <View style={styles.Answers}>
                            <Text style={styles.textAnswers}>1. Qual o melhor cimento para obras internas?</Text>

                            <View style={styles.ask}>
                                <View style={styles.item}>
                                    <Text style={styles.textAsk} >Votoran</Text>
                                </View> 
                                <View style={styles.item}>
                                    <MaterialIcon name="crop-square" size={13} style={styles.iconCheck}></MaterialIcon>
                                    <Text style={styles.textAsk} >Tupi</Text>
                                </View>
                                <View style={styles.item}>
                                    <MaterialIcon name="check-box" size={13} style={[styles.iconCheck, styles.iconCheckSelect]}></MaterialIcon>
                                    <Text style={[styles.textAsk, styles.textAskSelect]} >Mauá</Text>
                                </View> 
                                <View style={styles.item}>
                                    <MaterialIcon name="crop-square" size={13} style={styles.iconCheck}></MaterialIcon>
                                    <Text style={styles.textAsk} >CSN</Text>
                                </View>
                                <View style={styles.item}> 
                                    <MaterialIcon name="crop-square" size={13} style={styles.iconCheck}></MaterialIcon>
                                    <Text style={styles.textAsk} >Holcim</Text>
                                </View>
                            </View>

                            <View style={styles.answersCorrect}>
                                <Text style={styles.textCorrectAnswers}>Acertou! O Cimento Mauá possui secagem rápida e qualidade superior, facilitando o manuseio para obras internas e acabamentos.</Text>
                            </View>
                        </View>

                        <View style={styles.Answers}>
                            <Text style={styles.textAnswers}>1. Qual o melhor cimento para obras internas?</Text>

                            <View style={styles.ask}>
                                <View style={styles.item}>
                                    <Text style={styles.textAsk} >Votoran</Text>
                                </View> 
                                <View style={styles.item}>
                                    <MaterialIcon name="crop-square" size={13} style={styles.iconClear}></MaterialIcon>
                                    <Text style={styles.textAsk} >Tupi</Text>
                                </View>
                                <View style={styles.item}>
                                    <MaterialIcon name="check-box" size={13} style={[styles.iconCheck, styles.iconCheckSelect]}></MaterialIcon>
                                    <Text style={[styles.textAsk, styles.textAskSelect]} >Mauá</Text>
                                </View> 
                                <View style={styles.item}>
                                    <MaterialIcon name="crop-square" size={13} style={styles.iconClear}></MaterialIcon>
                                    <Text style={styles.textAsk} >CSN</Text> 
                                </View>
                                <View style={styles.item}>  
                                    <MaterialIcon name="crop-square" size={13} style={styles.iconClear}></MaterialIcon>
                                    <Text style={styles.textAsk} >Holcim</Text>
                                </View>
                            </View>

                            <View style={styles.answersCorrect}>
                                <Text style={styles.textCorrectAnswers}>Acertou! O Cimento Mauá possui secagem rápida e qualidade superior, facilitando o manuseio para obras internas e acabamentos.</Text>
                            </View>
                        </View>

                        <View style={styles.Answers}>
                            <Text style={styles.textAnswers}>1. Qual o melhor cimento para obras internas?</Text>

                            <View style={styles.ask}>
                                <View style={styles.item}>
                                    <Text style={styles.textAsk} >Votoran</Text>
                                </View> 
                                <View style={styles.item}>
                                    <MaterialIcon name="crop-square" size={13} style={styles.iconClear}></MaterialIcon>
                                    <Text style={styles.textAsk} >Tupi</Text>
                                </View>
                                <View style={styles.item}>
                                    <MaterialIcon name="check-box" size={13} style={[styles.iconCheck, styles.iconCheckSelect]}></MaterialIcon>
                                    <Text style={[styles.textAsk, styles.textAskSelect]} >Mauá</Text>
                                </View> 
                                <View style={styles.item}>
                                    <MaterialIcon name="crop-square" size={13} style={styles.iconClear}></MaterialIcon>
                                    <Text style={styles.textAsk} >CSN</Text>
                                </View>
                                <View style={styles.item}> 
                                    <MaterialIcon name="crop-square" size={13} style={styles.iconClear}></MaterialIcon>
                                    <Text style={styles.textAsk} >Holcim</Text>
                                </View>
                            </View>

                            <View style={styles.answersCorrect}>
                                <Text style={styles.textCorrectAnswers}>Acertou! O Cimento Mauá possui secagem rápida e qualidade superior, facilitando o manuseio para obras internas e acabamentos.</Text>
                            </View>
                        </View>
                    </View>
                </View> 
            </ScrollView>
        );
    }
}