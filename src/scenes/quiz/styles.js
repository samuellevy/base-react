import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  container:{
      flex: 1,
      width: "100%",
      paddingTop: 40,
      backgroundColor: colors.primary,
  },
  boxTitle:{
    padding: 10,
  },
  txtTitle:{
    color: colors.ultralight,
    textAlign: "center",
    fontFamily: fonts.main,
    fontSize: 12,
    fontWeight: 'bold',
  },
  boxQuestion:{
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: 'center',
    width: "90%",
    marginHorizontal: '5%',
  },
  txtQuestionTitle:{
    color: colors.primary,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: fonts.main,
  },
  boxAnswer:{
    
  },
  txtAnswer:{
    fontSize: 18,
    paddingVertical: 20,
    backgroundColor: colors.graylight,
    marginVertical: 8,
    textAlign: 'center',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  btnQuestionConfirm:{
    color: colors.white,
    fontSize: 12,
    textAlign: 'center',
  },
  boxQuestionConfirm:{
    alignSelf: 'center',
    width: '70%',
    backgroundColor: colors.greenlight,
    borderRadius: 25,
    paddingVertical: 10,
    marginTop: 16,
  }
});

export default styles;
