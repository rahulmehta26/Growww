/* eslint-disable eol-last */
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../constants/color';

const Timer = ({type, onPress, style}) => {

    const [timer, setTimer] = useState(30);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let intervalId;

        if(timer > 0){
            intervalId = setInterval(() => {
                setTimer((prev) => prev - 1 )
            }, 1000);
        }
        return () => clearInterval(intervalId);
    } , [timer]);

    const handleResend = async () => {
        setLoading(true);
        await onPress();
        setTimer(30);
        setLoading(false);
      };

  return (

    <TouchableOpacity
    onPress={timer === 0 ? handleResend : undefined }
    disabled = {timer !== 0 || loading }
    >

      {
        loading ? 
        (
            <ActivityIndicator size={RFValue(12)} color = {Colors.Text}  />
        ) : 
        
        (
            <Text
            style = {[
                styles.resendText, 
                {
                    color: Colors.ThemeColor
                },
                style
            ]}
            >
            {
                timer === 0 ? "Resend OTP" : `Resend in ${timer}s`
            }
            </Text>
        )
      }

    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({

    resendText:{
        fontFamily: 'Roboto-Medium',
    fontSize: RFValue(11),

    }
})

export default Timer;