import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  iconBox: {
      backgroundColor: "#00a6e3",
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    flex: 1
  }
});

export default styles;
