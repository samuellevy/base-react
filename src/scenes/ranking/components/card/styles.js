import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '30%',
        paddingVertical: 10,
    },
    card: {
        flex: 1,
        flexWrap: 'nowrap',
        borderRadius: 3,
        elevation: 2,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0
        },
        padding: 15,
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    image: {
        height: 70,
        width: 70,
        marginVertical: 15,
        resizeMode: 'contain',
    },
    titleBox: {
        backgroundColor: colors.yellow,
        borderRadius: 3,
        padding: 3,
        width: '100%',
    },
    title: {
        fontSize: metrics.fonts.small,
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loja: {
        fontSize: metrics.fonts.medium,
        color: colors.fontColor,
        textAlign: 'center',
        paddingBottom: 10,
    },
    score: {
        fontSize: metrics.fonts.medium,
        fontWeight: 'bold',
        color: colors.yellow,
    }
});

export default styles;
