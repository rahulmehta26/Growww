/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { goBack, navigate } from '../utility/NavUtils';
import { Colors } from '../constants/color';
import Icon from "react-native-vector-icons/Ionicons"

const BackButton = ({path}) => {

  return (

    <TouchableOpacity
    style = {styles.container}
    onPress={() =>  {path ? navigate(path) : goBack()} }
    >

        <Icon name = {"arrow-back-outline"} size = {30} color = {Colors.Text} />

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

    container:{
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingVertical: 2,
        marginBottom: 5,
    },
})

export default BackButton;