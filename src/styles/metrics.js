import { Platform } from 'react-native';

export default {
  containerPadding: 30,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 15 },
  }),
  tabBarHeight: 50,
  fonts:{
    xbig: 20,
    big: 18,
    medium: 16,
    small: 14,
    xsmall: 12,
    xxsmall: 10,
  }
};