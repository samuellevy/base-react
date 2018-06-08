import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // padding: metrics.containerPadding,
        backgroundColor: '#f7fbfc',
        justifyContent: 'center',
    },
    scrollview:{
        marginBottom: 55,
    }
});

export default styles;
