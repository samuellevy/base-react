import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
// import TextInputMask from 'react-native-text-input-mask';
const timer = require('react-native-timer');
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';  
import NavIcon from '../../components/navigation/NavIcon';
import { colors, metrics, fonts } from '../../styles';
import styles from './styles';
 
import TitleTop from '../../components/title/primary';


export default class Profile extends Component {
  	static navigationOptions = {
    	title: 'products',
    	headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
    };
    
    constructor(props) {
        super(props); 
        this.stateInput = { 
            loja: 'Loja Golveia Construção',
            email: 'beatriz@3aww.com',
            name: 'Beatriz Martins', 
            senha: '123456',
            tel: '00 0000-0000',
        };
        this.state = {
            viewSection :false
        } 
    }
	  
  	render() {  
    	return (    
			<View style={styles.container}> 
				<ScrollView style={{marginBottom: 10, padding: 18}}>   
					<TitleTop textContent={'EDITAR PERFIL'} />    

                    <View style={styles.boxForm}>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputText}>LOJA</Text>
                            <TextInput editable={false} style={styles.input} underlineColorAndroid='transparent' onChangeText={(loja) => this.setState({loja})} value={this.stateInput.loja} placeholderTextColor={colors.textColor}/>
                        </View>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputText}>E-MAIL</Text>
                            <TextInput editable={false} style={styles.input} underlineColorAndroid='transparent' onChangeText={(email) => this.setState({email})} value={this.stateInput.email} placeholderTextColor={colors.textColor}/>
                        </View>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputTextGreen}>NOME</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(name) => this.setState({name})} value={this.stateInput.name} placeholderTextColor={colors.textColor}/>
                        </View>
                        <View style={styles.boxInput}>  
                            <Text style={styles.inputTextGreen}>SENHA</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(senha) => this.setState({senha})} value={this.stateInput.senha} placeholderTextColor={colors.textColor}/>
                            <TouchableOpacity style={styles.btnVisible}> 
                                <MaterialIcon name="remove-red-eye" size={15} style={styles.iconDeleteTransparent}></MaterialIcon>
                            </TouchableOpacity>
                        </View>  
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputTextGreen}>TEL.</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(tel) => this.setState({tel})} value={this.stateInput.tel} placeholderTextColor={colors.textColor}/>

                            {/* <TextInputMask
                            refInput={ref => { this.input = ref }}
                            onChangeText={(formatted, extracted) => {
                                console.log(formatted) // +1 (123) 456-78-90
                                console.log(extracted) // 1234567890
                            }}
                            mask={"+1 ([000]) [000] [00] [00]"}
                            /> */}
                        </View>

                        <View style={styles.boxBtn}>
                            <TouchableOpacity style={styles.btnSalve}> 
                                <Text style={styles.textBtn}>SALVAR ALTERAÇÕES</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
				</ScrollView>
			</View>
	    ); 
  	}
}