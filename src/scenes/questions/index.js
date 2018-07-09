import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity  } from 'react-native';
import Question from './components/question';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rest from '../../services/rest';

export default class FetchExample extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            questionKey:0,
            dataSource: []
        }
    }
    
    componentDidMount(){
        rest.get('/questions/get/2').then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest.questions
            });
        })
    }
    
    static navigationOptions = {
        header: null
    };

    render(){
        const { goBack } = this.props.navigation;
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20, alignItems: 'center'}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        
        return(
            <View style={styles.contentAll}> 
                <View style={styles.contentModal}>
                    <TouchableOpacity style={styles.clearBtn} onPress={() => {goBack()}}>
                        <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                    </TouchableOpacity>
                    <View style={styles.titleModulo}>
                        <Text style={styles.titleQuiz}>MÓDULO 03: CIMENTO CPII</Text>
                    </View>

                    <View style={styles.contentQuiz}>
                        <View style={styles.content}> 
                            <Text style={styles.titleQuizBox}>{this.state.dataSource[this.state.questionKey].title}</Text>
                            <View style={{width: '100%'}}>
                            {this.state.dataSource[this.state.questionKey].options.map((item, key) => (
                                <View style={{alignItems: 'center', paddingLeft: 15,paddingRight: 15}} key={'answer_'+key}>
                                    <TouchableOpacity style={[styles.btnQuestion]}>
                                        <Text style={[styles.textQuestion]}>{item.title}</Text>
                                    </TouchableOpacity>
                                </View> 
                            ))}
                            </View>
                            <View style={styles.boxBtn}>
                                <TouchableOpacity style={[styles.btnConfirm]} onPress={() => {this.setState({questionKey: 1})}}>
                                    <Text style={styles.textBtn}>CONFIRMAR RESPOSTA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
