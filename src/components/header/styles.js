import { StyleSheet, Platform } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    header: {
        paddingTop: (Platform.OS === 'ios') ? metrics.headerPadding : 0,
        height: 70,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 32,
        width: 72,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;