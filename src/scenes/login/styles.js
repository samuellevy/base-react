import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: metrics.containerPadding,
        paddingTop: metrics.headerPadding,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    boxAlert:{
        
    },
    iconAlert:{

    },
    boxAlertText:{

    },

    boxHello:{
        paddingTop: metrics.headerPadding,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtHello:{
        fontSize: 24,
        fontFamily: fonts.main,
        color: colors.primary
    },
    imgMarca:{

    },
    
    boxWelcome:{
        
    },

    txtWelcome:{
        fontSize: 24,
        fontWeight: 'normal',
        fontFamily: fonts.main,
    },
    
    boxLogin:{
        
    },

    txtInitial:{
        paddingVertical: metrics.padding,
        fontSize: 12,
        color: colors.gray,
        fontFamily: fonts.main,
        fontWeight: 'normal',
    },

    inputBox:{

    },
    
    inputIcon:{
        position: 'absolute',
        color: colors.light,
        marginTop: 5,
    },

    input:{
        height: 40, borderColor: colors.lighter, borderBottomWidth: 1,
        backgroundColor: colors.transparent,
        marginBottom: metrics.padding,
        color: colors.light,
        paddingLeft: 40,
    },

    boxCheck:{
        flexDirection: 'row'
    },

    checkIcon:{
        marginRight: 15,
        color: colors.regular,
    },

    txtKeep:{
        paddingTop: 5,
        color: colors.regular,
    },

    boxButton:{
        marginTop: 60,
        paddingVertical: 20,
        backgroundColor: colors.regular,
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff',
    },
    txtSign:{
        color: colors.white,
        fontFamily: fonts.main,
        fontWeight: 'normal',
    },
    txtForgot:{
        color: colors.regular,
        textAlign: 'center',
        margin: 35
    },

});

export default styles;
