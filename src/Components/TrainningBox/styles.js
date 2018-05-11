import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 15,
    backgroundColor: '#fff',
    padding: 15,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#aaa',
    shadowOpacity: 0.4,
  },
  headerBox:{
    flexDirection: 'row',
    marginBottom: 15,
  },
  iconBox: {
    backgroundColor: "#00a6e3",
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  iconVideo:{
    color: 'white',
  },
  titleBox:{
    marginLeft: 15,
    flex: 1,
    flexWrap: "wrap"
  },
  title:{
    color: '#00a6e3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    flex: 1
  }
});

export default styles;
