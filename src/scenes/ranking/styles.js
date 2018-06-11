import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // padding: metrics.containerPadding,
        // paddingTop: (Platform.OS === 'ios') ? metrics.headerPadding : 0,
        backgroundColor: colors.lightBackground,
        justifyContent: 'center',
    },
    rankingContent:{
        padding: 20,
    },
    rankingTitle:{
        fontSize: metrics.fonts.big,
        fontWeight: 'bold',
        color: colors.primary,
        paddingBottom: 10,
        lineHeight: 18,
    },
    otherPlaces:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default styles;
