import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../constants/color';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomText from './CustomText';

const CustomRadioBtn = ({
    label,
    error,
    disabled,
    selected,
    disabledBackground,
    onSelect,
    options,
    ...props
}) => {
  return (

    <View
    style = {styles.conatiner}
    >
        {
            label && (
                <View
                style = {styles.labelContainer}
                >
                    <Text
                    style = {[
                        styles.label,
                        {
                            color:Colors.Text
                        }
                    ]}
                    >
                        {label}
                    </Text>

                </View>
            )
        }

      <View
      style = {styles.radioContainer}
      >

        {
            options?.map((info, index) => {

                return(

                <TouchableOpacity
                key={index}
                style = {styles.radioItems}
                onPress={() => onSelect(info) }
                >

                    <Icon 
                    name = {
                        selected === info ? "radio-button-checked" : "radio-button-unchecked"
                    }
                    color = {
                        selected === info ? Colors.ThemeColor : Colors.Text
                    }
                    size = {RFValue(16)}
                    />

                    <CustomText 
                    variant='h6'
                    >
                        {
                            info.toLocaleUpperCase()
                        }
                    </CustomText>

                </TouchableOpacity>
                )
            } 
        
        )
        }
      </View>

      {
        error && (
            <View
            style= {styles.errorContainer}
            >
                <Icon 
                name = 'error'
                size = {RFValue(15)}
                style = {styles.errorText}
                />

                <Text
                style = {styles.errorText}
                >
                    {
                        error
                    }
                </Text>

            </View>
        )
      }

    </View>

  );
};

const styles = StyleSheet.create({
    conatiner:{
        marginVertical:10,
    },

    label:{
        fontSize: RFValue(14),
        fontFamily: 'Roboto-Medium',
    },

    radioContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
    },

    radioItems:{
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },

    errorContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 3,
        gap: 5,
    },

    errorText:{
        color: Colors.ErrorColor,
        fontSize: RFValue(13),
        fontFamily: 'Roboto-Medium',
    }

});

export default CustomRadioBtn;