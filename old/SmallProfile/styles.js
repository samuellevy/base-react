import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      margin: 15,
      backgroundColor: '#fff',
      padding: 15,
      shadowOffset:{  width: 1,  height: 1,  },
      shadowColor: '#dce0e1',
      shadowOpacity: 0.4,
    },
    infoBox:{
        width: '65%',
    },
    hello:{
        color: '#00985a',
        fontSize: 18,
        fontWeight: 'bold',
    },
    unitname:{
        marginTop: 15,
        color: '#757575',
        fontWeight: 'bold',
    },
    category:{
        color: '#757575',
    },
    performanceBox:{
        width: '35%',
    },
    performanceTitle:{
        color: '#00985a',
        fontWeight: 'bold'
    },
    performanceValue:{
        backgroundColor: '#00985a',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        padding: 8,
        color: 'white',
        marginTop: 5,
    }
});

export default styles;
