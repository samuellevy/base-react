import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../../components/navigation/NavIcon';
import styles from './styles';
import { colors, metrics, fonts } from '../../../styles';

import Header from '../../../components/header';
import Nav from '../../../components/navigation';
import AlertBox from '../components/alert';

import ModalDelete from '../components/modal';
import TitleTop from '../../../components/title/primary';

export default class addEmployee extends Component {
  	static navigationOptions = {
    	title: 'products',
    	headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
      };
      
    constructor(props) {
        super(props);
        this.stateInput = { 
            nome: '',
            cpf: '',
            email: '',
        };
        this.state = {
            viewSection :false
        }
    }

    renderBottomComponent(){
        if(this.state.viewSection) {
            return (
                <ModalDelete />
            )
        }
    } 
    
    buttonPress=()=>{
        if(this.state.viewSection == true) {
            this.setState({viewSection:false}) 
        } else {
            this.setState({viewSection:true})
        }
    }
   
  	render() {
    	return (              
			<View style={styles.containerAdd}>
                <AlertBox mensager={"Alterações salvas!"}/> 
 
                <ScrollView style={{marginBottom: 50, padding: 18}}>
                    <TitleTop textContent={'ADICIONAR FUNCIONÁRIOS'} />

                    <View style={styles.contentAddUser}>  
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputText}>NOME</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(nome) => this.setState({nome})} value={this.stateInput.nome} placeholderTextColor={colors.textColor}/>
                        </View>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputText}>CPF</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(cpf) => this.setState({cpf})} value={this.stateInput.cpf} placeholderTextColor={colors.textColor}/>
                        </View>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputText}>E-MAIL</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(email) => this.setState({email})} value={this.stateInput.email} placeholderTextColor={colors.textColor}/>
                        </View>
                    </View>

                    <View style={styles.addEmplayee}>
                        <TouchableOpacity style={styles.addBtn} onPress={() => {this.setState({visibleModal: false})} }>
                            <View style={styles.boxIcon}>
                                <MaterialIcon name="add" size={15} style={styles.iconAdd}></MaterialIcon>
                            </View>
                            <Text style={styles.textBtn}>ADICIONAR FUNCIONÁRIO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.deleteBtn} onPress={this.buttonPress}>
                            <MaterialIcon name="delete" size={15} style={styles.iconDelete}></MaterialIcon>
                            <Text style={styles.textBtn}>EXCLUIR FUNCIONÁRIO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.deleteBtnTransparent} onPress={this.buttonPress}>
                            <MaterialIcon name="delete" size={15} style={styles.iconDeleteTransparent}></MaterialIcon>
                            <Text style={styles.textBtnTransparent}>EXCLUIR FUNCIONÁRIO</Text>
                        </TouchableOpacity> 
                    </View> 
                </ScrollView>  
                {this.renderBottomComponent()}
			</View>
	    );  
  	}
}