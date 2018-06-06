import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: metrics.container.defaultPadding,
        paddingTop: metrics.headerPadding,
        backgroundColor: '#F7FBFC',
        marginBottom: metrics.container.marginBottom,
    },
});

export default styles;
