import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.fontColor,
    },
    store:{
        fontSize: 12,
        color: colors.fontColor,
    }
});

export default styles;
