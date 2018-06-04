import React, { Component } from 'react';

import { View } from 'react-native';
import NavIcon from '../components/navigation/NavIcon';
// import styles from './styles';

export default class Performance extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ focused, tintColor }) => {
            return <NavIcon title={'Desempenho'} icon={'today'}/>;
        },
    };
    render() {
        return (
            <View />
        );
    }
}
