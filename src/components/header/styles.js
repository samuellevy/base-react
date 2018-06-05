import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 40,
        width: 112,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;
