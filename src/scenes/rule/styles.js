import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: metrics.containerPadding,
        paddingTop: (Platform.OS === 'ios') ? metrics.headerPadding : 0,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    header:{
        height: 40,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
      height: 28,
      width: 65,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ruleContent:{
        padding: 15,
    },
    ruleTitle:{
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.primary,
        paddingVertical: 10,
    },
    ruleParagraph:{
        fontSize: 11,
        color: colors.dark,
        paddingBottom: 10,

    }
});

export default styles;
