import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, ListView } from 'react-native';
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
        modalVisible: false,
    };

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
                            <Text style={styles.titleQuizBox}>2. Qual é o melhor cimento para obras internas?</Text>

                            <View style={styles.contentList}>
                                <TouchableOpacity style={styles.btnQuestion}>   
                                    <Text style={styles.textQuestion}>Votoran</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnQuestion}>   
                                    <Text style={styles.textQuestion}>Tupi</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnQuestion}>   
                                    <Text style={styles.textQuestion}>Mauá</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnQuestion}>   
                                    <Text style={styles.textQuestion}>CSN</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnQuestion}>   
                                    <Text style={styles.textQuestion}>Holcim</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.boxBtn}>
                                <TouchableOpacity style={[styles.btnConfirm, styles.opacityBtn]}>   
                                    <Text style={styles.textBtn}>CONFIRMAR RESPOSTA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <ScrollView style={styles.scrollview}>

                    </ScrollView>
                </View>
            </Modal>
        );
    }
}