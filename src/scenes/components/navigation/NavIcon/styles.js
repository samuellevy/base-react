import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    tabBtn:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 13,
        fontFamily: fonts.main,
        color: '#7B9995',
    },
    icon:{
        color: '#7B9995',
    }
});

export default styles;
