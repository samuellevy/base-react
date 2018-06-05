import { Platform } from 'react-native';

export default {
  containerPadding: 30,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 15 },
  }),
  tabBarHeight: 50,
  fontTitle: {
    size: 14
  },
  infoBox:{
    iconSize: 40,
    fontSize: 14
  }
};