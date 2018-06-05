import { Platform } from 'react-native';

export default {
  containerPadding: 30,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 15 },
  }),
  tabBarHeight: 50,
  fonts:{
    xbig: 18,
    big: 16,
    medium: 14,
    small: 12,
    xsmall: 10,
    xxsmall: 8,
  }
};