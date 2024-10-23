import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Colors } from "../constants/color";
import CustomText from "./CustomText";

const TouchableText = ({ firstText, style, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText fontFamily= 'Roboto-Medium' style={[styles.text, { color: Colors.ThemeColor }, style]}>
        {firstText}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {

    fontSize: RFPercentage(1.8),
  },
});

export default TouchableText;
