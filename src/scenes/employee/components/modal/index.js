import React, { Component } from 'react';

import { View, Text, TouchableOpacity, WebView, Modal } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class modal extends Component {
    state = { 
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() { 
        return(
            <Modal animationType="fade"    
                transparent={true}
                visible={this.state.visibleModal}
                onRequestClose={() => { this.visibleModal(false); } }>
                
                <View style={styles.contentModal}>
                    <View style={styles.wrapper}>
                        <TouchableOpacity style={styles.clearBtn} onPress={() => {this.setState({visibleModal: false})} }>
                            <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                        </TouchableOpacity>

                        <Text style={styles.titleModal}>Tem certeza que quer excluir Beatriz Martins da equipe?</Text>
                        <Text style={styles.textModal}>Essa ação não pode ser desfeita.</Text>

                        <View style={styles.boxBtn}>
                            <TouchableOpacity style={styles.btnExit}>
                                <Text style={styles.textBtnExit}>SAIR</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnConfirm}>
                                <Text style={styles.textBtnConfirm}>CONFIRMAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}