import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 35,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;
