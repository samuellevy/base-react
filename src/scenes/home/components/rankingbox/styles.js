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
        fontSize: 14,
        fontWeight: 'bold',
        
    },
    store:{
        fontSize: 12,
        
    }
});

export default styles;
