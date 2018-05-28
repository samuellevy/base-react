import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: metrics.headerPadding,
        backgroundColor: '#F7FBFC',
    },
    primaryTitle: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        fontSize: 18,
        color: '#00985B',
    }
});

export default styles;
