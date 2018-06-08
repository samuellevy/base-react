import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    name: {
        fontSize: metrics.fonts.big,
        fontWeight: 'bold',
        color: colors.fontColor,
    },
    store:{
        fontSize: metrics.fonts.medium,
        color: colors.fontColor,
    }
});

export default styles;
