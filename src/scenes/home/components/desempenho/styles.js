import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container:{
        paddingTop: 10,
        position: 'relative',
        marginTop: 10,
    },
    box:{
        flex: 1,
        flexDirection: 'row',
        width: '95%',
        margin: '2.5%',
        borderRadius: 3,
        padding: 20,
        paddingTop: 70,
        elevation: 2,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0
        },
        backgroundColor: colors.white,
    },
    splitLeft:{
        width: '60%',
    },
    text:{
        fontSize: metrics.fonts.medium,
        paddingBottom: 20,
        color: colors.textColor,
    },
    dateTitle:{
        fontSize: metrics.fonts.medium,
        fontWeight: 'bold',
        color: colors.blue,
        paddingBottom: 5,
    },
    table:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tableTitle:{
        fontSize: metrics.fonts.medium,
        fontWeight: 'bold',
        color: colors.gray,
        paddingBottom: 3,
    },
    tableText:{
        fontSize: metrics.fonts.medium,
        color: colors.black,
        fontStyle: 'italic',
    },
    splitRight: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        position: 'relative',
    }

});

export default styles;
