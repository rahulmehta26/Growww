import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import { resetAndNavigate } from '../../utility/NavUtils';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomText from '../../components/CustomText';
import { logo } from '../../utility/imageUtils';
import TouchableText from '../../components/TouchableText';
import CustomKeyBoard from '../../components/CustomKeyBoard';
import OtpRound from '../../components/OtpRound';

const initialState = ["", "", "", ""];

const BiometricVerification = ({onForgetPin}) => {

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [otpError, setOtpError] = useState(null);

  const handlePressNumber = (number) => {

    if(focusedIndex < otp.length ){
      const newOtp = [...otp];
      newOtp[focusedIndex] = number.toString;
      setOtpError(null);
      setOtp(newOtp);
      setFocusedIndex(focusedIndex + 1);
    }
  };

  const handlePressBackspace = () => {
    if (focusedIndex > 0) {
      const newOtp = [...otp];
      newOtp[focusedIndex - 1] = "";
      setOtp(newOtp);
      setFocusedIndex(focusedIndex - 1);
    }
  };

  const handlePressCheckmark = async () => {

    let valid = false;

    otp.forEach((i) => {
      if(i === '' ){
        valid = true;
        setOtpError("Wrong PIN, 2 attempts remaining")
        setOtp(initialState);
        setFocusedIndex(0);
      }
    } );

    if(!valid){
      setLoading(true);

      await setTimeout(() => {
        setLoading(false);
        setOtp(initialState);
        setFocusedIndex(0);
        resetAndNavigate("HomeScreen");
      }, 2000 );
    }
    
  };


  useEffect(() => {
    const allFilled = otp.every((value) => value !== "");
    if (allFilled) {
      // handlePressCheckmark();
    }
  }, [otp]);


  return (

    <CustomSafeAreaView>

<View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <CustomText variant="h5" fontFamily='Roboto-Bold'>
          Enter Groww PIN
        </CustomText>
        <View style={styles.emailContainer}>
          <CustomText style={styles.subText}>r*************1@gmail.com</CustomText>
          <TouchableText
            firstText="Logout"
            style={styles.logoutText}
            onPress={() => {} }
          />
        </View>
      </View>

      <OtpRound 
      onForgotPin={onForgetPin}
      loading={loading}
      otp={otp}
      error={otpError}
      />

      <CustomKeyBoard 
      customFont
      onPressBackspace={handlePressBackspace}
      onPressCheckmark={handlePressCheckmark}
      onPressNumber={handlePressNumber}
      isBiometric = {true}
      // onPressBiometric={handleBiometricVerification}
      />

    </CustomSafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(27),
    marginBottom: RFValue(12),
  },
  logo: {
    height: RFValue(32),
    width: RFValue(30),
    alignSelf: "center",
    marginBottom: 8,
  },
  emailContainer: {
    gap: 6,
    marginTop: 15,
  },
  subText: {
    alignSelf:'center',
    fontSize: RFValue(12),
  },
  logoutText: {
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(12),
    alignSelf:'center',

  },
});

export default BiometricVerification;