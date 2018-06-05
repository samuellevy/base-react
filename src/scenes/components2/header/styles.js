import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

const styles = StyleSheet.create({
    header: {
        height: 45,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 30,
        width: 68,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;
