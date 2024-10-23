import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import { Colors } from "../constants/color";


const SocialLoginBtn = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {icon}
      <CustomText variant="h6" fontFamily='Roboto-Medium' style={styles.text}>
        {text}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginVertical: 10,
    backgroundColor: Colors.Background,
    borderWidth: 1,
    borderColor: "#DFDFDF",
  },
  text: {
    marginLeft: 10,
    color: "black",
  },
});

export default SocialLoginBtn;
