import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({

    box:{
        flex: 1,
        flexDirection: 'row',
        width: '95%',
        margin: '2.5%',
        borderRadius: 3,
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
        paddingLeft: 20,
    },
    text:{
        fontSize: 14,
        paddingBottom: 15,
        color: colors.textColor,
    },
    tableTitle:{
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.blue,
    }
    

});

export default styles;
