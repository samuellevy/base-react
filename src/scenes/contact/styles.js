import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: metrics.container.defaultPadding,
        paddingTop: metrics.headerPadding,
        backgroundColor: colors.lightBackground,
        marginBottom: metrics.container.marginBottom,
    },
    txtDescription:{
       // paddingHorizontal: 15,
        fontSize: metrics.fonts.medium,
        fontFamily: fonts.main,
        fontWeight: 'normal',
        marginTop: 20,
    },
    contactForm:{
        borderWidth: 1,
        borderColor: colors.regular,
        height: 180,
        marginTop: 20,
        backgroundColor: colors.white,
    },
    boxSend:{
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: metrics.tabBarHeight

    }

});

export default styles;
