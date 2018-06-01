import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: metrics.containerPadding,
        // paddingTop: (Platform.OS === 'ios') ? metrics.headerPadding : 0,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    cursoInfo: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: metrics.headerPadding,
        backgroundColor: '#F7FBFC',
    },
    boxTitle: {
        paddingBottom: 10,
    },
    infoCurse: {
        fontFamily: fonts.main,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FCB415',
    },
    description: {
        fontFamily: fonts.main,
        color: '#7B9995',
        fontWeight: 'normal',
        paddingTop: 5,
        fontSize: 14,
    },
    viewVideo: {
        width: "100%",
        height: 160,
        marginTop: 20,
        marginBottom: 20,
    },
    boxTest: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    startTest: {
        width: 170,
        backgroundColor: '#ADCCC7',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 7,
        borderRadius: 30,
    },
    startTestActive: {
        width: 170,
        backgroundColor: '#FCB415',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 7,
        borderRadius: 30,
    },
    textBtn: {
        color: colors.white,
        fontSize: 12,
    }
});

export default styles;
