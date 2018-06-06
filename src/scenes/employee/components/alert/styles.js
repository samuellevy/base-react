import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    contentAlert: { 
        flex: 1, 
        flexDirection: 'row', 
        width: "100%",
        height: 10,
        backgroundColor: "red"
    },
    boxAlert: {
        height: 10,
    }
});  

export default styles;
