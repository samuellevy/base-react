import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    container:{
        padding: metrics.headerPadding,
    },
    boxHello:{
        paddingTop: metrics.headerPadding,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtHello:{
        fontSize: 24,
        fontFamily: 'NotoSans-Bold',
        color: colors.primary
    },
    imgMarca:{

    },
    
    boxDescription:{
        
    },

    txtDescription:{
        fontSize: 24,
        fontWeight: 'normal',
        fontFamily: 'NotoSans-Bold',
    },
    
    boxLogin:{
        paddingTop: metrics.headerPadding
    },

    input:{
        margin: metrics.headerPadding / 2,
        height: 40, borderColor: 'gray', borderBottomWidth: 1,
        backgroundColor: '#FFFFFF',
    }

});

export default styles;
