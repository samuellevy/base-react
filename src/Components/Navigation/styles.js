import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        position: 'absolute', left: 0, right: 0, bottom: 0,
    },
    navBar:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "#FFF",
        paddingTop: 5,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#dce0e1',
        shadowOpacity: 1.0,
    },
    tabBtn:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 12,
    },
    icon:{
        color: '#757575',
    }
});

export default styles;
