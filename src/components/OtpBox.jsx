import {View, Text, Animated, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../constants/color';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OtpBox = ({error, otpValues, focusedIndex}) => {
  const [shakeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (error && error !== '') shake();
  }, [error]);

  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      <View style={styles.container}>
        {otpValues?.map((info, index) => (
          <Animated.View
            key={index}
            style={[
              styles.inputBox,
              {
                borderColor: error
                  ? Colors.ErrorColor
                  : focusedIndex === index
                  ? Colors.Text
                  : otpValues[index]
                  ? Colors.Profit
                  : '#ccc',
                borderWidth: focusedIndex === index ? 2 : 1,
                transform: [{translateX: shakeAnimation}],
              },
            ]}>
            <CustomText
              variant="h4"
              fontFamily="Lato-Regular"
              style={{color: otpValues[index] ? Colors.Profit : Colors.Text}}>
              {info}
            </CustomText>
          </Animated.View>
        ))}
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Icon size={RFValue(15)} name="error" color={Colors.ErrorColor} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    gap: 5,
  },

  errorText: {
    color: Colors.ErrorColor,
    fontSize: RFValue(13),
    fontFamily: 'Roboto-Medium',
  },

  inputBox: {
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 50,
    height: 50,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OtpBox;
