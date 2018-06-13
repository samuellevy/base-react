import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 20,
        flexDirection: 'row',
    },
    dateCell:{
        width: 70,
    },
    introCell:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }   
});

export default styles;
