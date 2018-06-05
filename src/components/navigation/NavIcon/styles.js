import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    tabBtn:{
        width: Dimensions.get('screen').width / 5,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title:{
        fontSize: 10,
        fontFamily: fonts.main,
        color: '#7B9995',
    },
    icon:{
        alignSelf: 'center',
        color: '#7B9995',
    }
});

export default styles;
