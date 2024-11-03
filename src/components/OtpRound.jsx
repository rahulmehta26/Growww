/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import {View, Text, StyleSheet, Animated, Easing} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../constants/color';
import {RFValue} from 'react-native-responsive-fontsize';
import TouchableText from './TouchableText';

const OtpRound = ({error, otp, loading, onForgotPin}) => {
  const [animatedValues] = useState(() =>
    Array.from({length: otp?.length}, () => new Animated.Value(1)),
  );

  useEffect(() => {
    if (loading) {
      startAnimation();
    } else {
      resetAnimation();
    }
  }, [loading]);

  const startAnimation = () => {
    Animated.loop(
      Animated.stagger(
        100,
        animatedValues.map(val =>
          Animated.sequence([
            Animated.timing(val, {
              toValue: 0.8,
              duration: 100,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
            Animated.timing(val, {
              toValue: 1,
              duration: 100,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
          ]),
        ),
      ),
    ).start();
  };

  const resetAnimation = () => {
    animatedValues.forEach(val => val.setValue(1));
  };

  const [shakeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (error) {
      shake();
    }
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
        toValue: 10,
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
        {otp?.map((text, index) => (
          <Animated.View
            key={index}
            style={[
              styles.inputBox,
              {
                borderColor:
                  otp[index] !== '' ? Colors.ThemeColor : Colors.Text,
                borderWidth: 2,
                backgroundColor:
                  otp[index] !== '' ? Colors.ThemeColor : 'transparent',
                transform: [
                  {translateX: shakeAnimation},
                  {scale: animatedValues[index]},
                ],
                borderRadius: 40,
              },
            ]}></Animated.View>
        ))}
      </View>

      <TouchableText
        firstText="Forgot PIN?"
        onPress={onForgotPin}
        style={{fontFamily: 'Roboto-Regular', textAlign: 'center'}}
      />

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'center',
    width: '50%',
  },

  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
    gap: 5,
    textAlign: 'center',
    alignSelf: 'center',
  },

  errorText: {
    color: Colors.ErrorColor,
    fontSize: RFValue(13),
    fontFamily: 'Roboto-Regular',
  },

  inputBox: {
    width: RFValue(18),
    height: RFValue(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OtpRound;
