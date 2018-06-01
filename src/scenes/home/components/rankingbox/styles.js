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
        elevation: 1,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0
        },
        backgroundColor: colors.white,
    },
    split:{
        width: '50%',
    },
    
    splitTitleBox:{
        backgroundColor: colors.yellow,
        padding: 4,
    },
    splitTitleBoxLeft:{
        borderTopLeftRadius: 3,
    },
    splitTitleBoxRight:{
        borderTopRightRadius: 3,
    },
    splitTitle:{
        fontSize: 10,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
    },
    splitText:{
        fontSize: 12,
        lineHeight: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        color: colors.fontColor,
    },
    splitTextScore:{
        color: colors.yellow,
        borderLeftWidth: 0.5,
        borderLeftColor: colors.regular,
    },

});

export default styles;
