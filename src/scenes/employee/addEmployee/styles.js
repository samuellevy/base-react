import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // padding: metrics.containerPadding,
        // paddingTop: (Platform.OS === 'ios') ? metrics.headerPadding : 0,
        backgroundColor: '#f7fbfc', 
        padding: 18,
    },
    contentAddUser: {
        marginTop: 35,
    },   
    boxInput: {
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#ADCCC7',
        borderBottomWidth: 2,
    },
    inputText: {
        width: "20%",
        color: colors.light,
        fontSize: 10,
    },
    input: {
        width: '80%',
        borderColor: colors.lighter, 
        borderBottomWidth: 0,
        fontSize: 14,
    },
    addEmplayee: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        paddingTop: 50,
    },
    addBtn: {
        width: "70%", 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.yellow,
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 50,
        marginBottom: 20,
    }, 
    boxIcon: {
        backgroundColor: colors.white,
        borderRadius: 50,
        width: 15,
    },
    iconClear: { 
        color: colors.yellow,
    },
    textBtn: {
        fontSize: 12,
        color: colors.white,
        paddingLeft: 10,
    },
});

export default styles;
