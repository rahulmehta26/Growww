/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eol-last */
import { View, Text, Animated, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../constants/color';
import CustomText from './CustomText';
import TouchableRipple from 'react-native-material-ripple';

const CustomBtn = ({ text, loading, disabled, onPress, style }) => {

    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

    useEffect(() => {
        if (loading) {
          animatedValue.setValue(0);
          Animated.loop(
            Animated.timing(animatedValue, {
              toValue: 1,
              duration: 1800,
              useNativeDriver: true,
            })
          ).start();
        } else {
          animatedValue.stopAnimation();
        }
      }, [loading]);

      const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-500, 500],
      });

  return (

    <TouchableRipple
    disabled = {disabled}
    onPress = {onPress}
    rippleColor = '#fff'
    style = {[
        styles.btn,
        {
            backgroundColor: loading || disabled ?  "#DFDFDF" : Colors.Profit
        },
        style
    ]}
    >

        <CustomText
        fontFamily= 'Roboto-Bold'
        variant='h4'
        style={{color:'white'}}
        >{text}
        </CustomText>

        {
            loading && (
                <Animated.View 
                style = {[
                    styles.loadingIndicator,
                    {
                        transform: [{translateX}],
                    }
                ]}
                />
            )
        }

    </TouchableRipple>
     
  );
};

const styles = StyleSheet.create({
    btn:{
        padding: 14,
        width: "100%",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
    },

    loadingIndicator:{
    position: "absolute",
    top: 0,
    left: 0,
    height: 2,
    backgroundColor: Colors.profit,
    width: "100%",
    }
})

export default CustomBtn;