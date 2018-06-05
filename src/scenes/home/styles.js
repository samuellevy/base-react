import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // padding: metrics.containerPadding,
        // paddingTop: (Platform.OS === 'ios') ? metrics.headerPadding : 0,
        backgroundColor: '#f7fbfc',
        justifyContent: 'center',
    },
    ruleContent:{
        padding: 15,
    },
    ruleTitle:{
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.primary,
        paddingBottom: 10,
        lineHeight: 16,
    },
    ruleParagraph:{
        fontSize: 12,
        color: colors.dark,
        marginBottom: 10,
        lineHeight: 14,
    }
});

export default styles;
