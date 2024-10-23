/* eslint-disable quotes */
import React from "react";
import { Text, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../constants/color";

const CustomText = ({
  variant = "body",
  fontSize,
  style,
  children,
  numberOfLines,
  onLayout,
  fontFamily
}) => {

  const fontSizeMap = {
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,
    h7: 10,
    h8: 9,
    body: 12,
  };

  const computedFontSize = RFValue(fontSize || fontSizeMap[variant]);

  return (
    <Text
      onLayout={onLayout}
      style={[
        styles.text,
        { fontSize: computedFontSize, fontFamily:fontFamily },
        style, 
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "left",
    color:Colors.Text
  },
});

export default CustomText;
