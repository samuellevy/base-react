import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingLeft: 40,
        borderTopWidth: 0.5,
        borderTopColor: colors.regular,
    },
    text:{
        fontSize: metrics.fonts.xbig,
        paddingLeft: 15,
        color: colors.fontColor,
    }


});

export default styles;
