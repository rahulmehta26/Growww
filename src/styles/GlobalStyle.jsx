import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const GlobalStyles = StyleSheet.create({
  bottomBtn: {
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
  },
  tabIcon: {
    width: RFValue(20),
    height: RFValue(20),
  },
});
