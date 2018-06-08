import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container:{
        paddingVertical: 15,
        position: 'relative',
    },
    card:{
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        elevation: 2,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0
        },
        alignItems: 'center',
        paddingVertical: 25,
        backgroundColor: colors.white,
    },
    imageContainer:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        height: 110,
        width: 110,
        resizeMode: 'contain',
    },
    content: {
        height: '100%',
        justifyContent: 'space-between',
    },
    title:{
        backgroundColor: colors.yellow,
        color: colors.white,
        padding: 5,
        fontWeight: 'bold',
        borderRadius: 3,
        textAlign: 'center',
    }
});

export default styles;
