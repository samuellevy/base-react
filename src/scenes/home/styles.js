import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f7fbfc',
    },
    scrollview:{
        marginBottom: 55,
    },
    contentImage: {
        alignItems: 'center',
    },
    image: {
        width: '100%',
        resizeMode: 'cover'
    }
});

export default styles;
