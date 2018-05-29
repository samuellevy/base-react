import { Platform } from 'react-native';

export default {
  padding: 25,
  // containerPadding: 30,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 15 },
  }),
  tabBarHeight: 50,
};