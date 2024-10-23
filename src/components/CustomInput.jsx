/* eslint-disable eol-last */
import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/color';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomInput = ({
    label,
    iconName,
    error,
    rightIcon,
    leftIcon,
    disabled,
    password,
    rightText,
    textTop,
    required,
    containerStyle,
    textInputStyle,
    onFocus = () => {},
    ...props
}) => {

    const [isFocused, setIsFocused] = useState(false);
    const [hideEyeIcon, setHideEyeIcon] = useState(true);

   const  passToggle = () => {
        setHideEyeIcon((prev) => !prev )
    }

  return (

    <View 
    style = {styles.container}
    >

       {
        label && 

        <View
        style = {styles.labelContainer}
        >
            <Text
            style = {[
                styles.labelText,
                {
                    color:Colors.Text
                }
            ]}
            >
                {label} {required && "*" }
            </Text>

            {rightText}

        </View>
       }

       <View
       style = {[
        styles.inputContainer,
        {
            borderColor: error ? Colors.ErrorColor : isFocused ? Colors.Profit : Colors.Border,
            borderBottomWidth: isFocused ? 2 : 1, 
        },
        containerStyle
    ]}
       >

        {leftIcon}

        <TextInput
        placeholderTextColor={'#cfd0d3'}
        style = {[
            styles.textInput,
            {
                textAlignVertical: textTop ? "top" : 'center',
                color:Colors.Text
            }
        ]}
        secureTextEntry = {password ? hideEyeIcon : false}
        autoCorrect = {false}
        onFocus={() => {
            setIsFocused(true)
         } }
         maxLength={256}
         editable = {!disabled}
         onBlur={() => {
            setIsFocused(false)
         } }
         {...props}
        />

        {rightIcon}

        {
            password && (
              
                <Icon 
                name={ hideEyeIcon ? "visibility" : "visibility-off" } 
                size={20} 
                color="#900" 
                style = {styles.password} 
                onPress = {passToggle}
                />
            )
        } 

       </View>

      {
        error && (
            <View
            style = {styles.errorContainer}
            >

                <Icon name = {'error'} size = {RFValue(13)} style = {styles.errorText}  />
                <Text
                style = {styles.errorText}
                >{error}</Text>
                
            </View>
        )
      }
    </View>

  );
};

const styles = StyleSheet.create({

    container: {
        marginVertical: 8,
    },

    labelContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 2,
    },

    labelText: {
        fontSize: RFValue(14),
        fontFamily: 'Roboto-Medium',
    },

    errorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 3,
        gap: 5,
        marginTop:6
    },

    errorText: {
        color: Colors.ErrorColor,
        fontSize:  RFValue(11),
        fontFamily: 'Roboto-Medium',
    },

    password: {
        textAlignVertical: 'center',
        opacity: 0.8,
    },

    textInput: {
        fontFamily: 'Roboto-Regular',
        fontSize: (13),
        alignItems: "flex-start",
        height: 28,
        width: "82%",
        paddingVertical: 5,
    },

    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical: 4,
        justifyContent:'space-between'
    }
})

export default CustomInput;