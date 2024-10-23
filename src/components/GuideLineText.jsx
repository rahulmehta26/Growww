import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../constants/color';
import CustomText from './CustomText';

const GuideLineText = ({text}) => {

  return (

    <View
    style = {[
        styles.container,
        {
            backgroundColor:'#fff5e0'
        }
    ]}
    >

        <Icon 
        name = 'error'  
        size = {RFValue(16)} 
        style = {[styles.text, {color:Colors.Text}]}
        />

      <View
      style = {styles.textContainer}
      >
        {
            text?.map((info, index) => {

                return(
                      <CustomText
                      key={index}
                      fontFamily='Roboto-Regular'
                      style={styles.text}
                      variant='h7'
                      >
                        {
                            info
                        }
                      </CustomText>

                )
            } )
        }
         
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },

    text:{
        opacity:0.6,
        marginBottom:3
    },

    textContainer:{
        width:'90%'
    }

})

export default GuideLineText;