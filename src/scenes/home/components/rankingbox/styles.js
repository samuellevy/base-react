import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
        
    },
    store:{
        fontSize: 10,
        
    },
    box:{
        flex: 1,
        flexDirection: 'row',
        width: '95%',
        margin: '2.5%',
        borderRadius: 3,
        backgroundColor: colors.white,
        elevation: 1,
    },
    split:{
        width: '50%',
    },

    splitTitleBox:{
        backgroundColor: colors.yellow,
        padding: 3,
    },
    splitTitleBoxLeft:{
        borderTopLeftRadius: 3,
    },
    splitTitleBoxRight:{
        borderTopRightRadius: 3,
    },
    splitTitle:{
        fontSize: 9,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
    },
    splitTextBoxLeft:{
        borderRightWidth: 0.5,
        borderRightColor: colors.regular,
    },
    splitTextBox:{
        height: 40,
        padding: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    splitText:{
        fontSize: 12,
        lineHeight: 12,
        paddingBottom: 5,
        fontWeight: 'bold',
        color: colors.fontColor,
    },
    splitTextScore:{
        color: colors.yellow,
    },

});

export default styles;
