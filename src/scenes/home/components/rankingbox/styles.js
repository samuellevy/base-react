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
    split:{
        width: '50%',
    },
    boxSplitText:{
        borderRightWidth: 1,
        borderRightColor: colors.regular,
    },
    splitTitleBox:{
        backgroundColor: colors.yellow,
        padding: 5,
    },
    splitTitleBoxLeft:{
        borderTopLeftRadius: 3,
    },
    splitTitleBoxRight:{
        borderTopRightRadius: 3,
    },
    splitTitle:{
        fontSize: metrics.fonts.xsmall,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
    },
    splitText:{
        fontSize: metrics.fonts.xbig,
        lineHeight: metrics.fonts.xbig,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        color: colors.fontColor,
    },
    splitTextScore:{
        color: colors.yellow,
    },

});

export default styles;
