/* eslint-disable eol-last */
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import CustomInput from '../../components/CustomInput';
import BackButton from '../../components/BackButton';
import { normalizeHeight } from '../../utility/ScreenDimensions';
import { goBack, navigate } from '../../utility/NavUtils';
import CustomBtn from '../../components/CustomBtn';
import Timer from '../../components/Timer';
import { logo_text } from '../../utility/imageUtils';

const EmailOtpScreen = ({route}) => {

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const handleSubmit = async () => {
    if (!otp) {
      setOtpError("Enter OTP");
      return;
    }
    setLoading(true);
    // await dispatch(
    //   VerifyOTP({
    //     email: route.params.email,
    //     otp: otp,
    //     otp_type: "email",
    //     data: null,
    //   })
    // );

    setTimeout(() => {
      navigate("EmailPassScreen", {
        email:route?.params?.email
      })
      setLoading(false);
    }, 2000 )
  };

  const resendOTPHandler = async () => {
    // await dispatch(SendOTP({ email: route?.params?.email, otp_type: "email" }));
  };

  return (
 
    <CustomSafeAreaView>

<BackButton />

<View style={styles.imgContainer}>

  <Image source={logo_text} style={styles.img} />

</View>

 <TouchableOpacity onPress={() => goBack() } >

  <View pointerEvents='none' >
    <CustomInput 
    label='Email Address'
    value = {route?.params?.email}
    />
  </View>
 </TouchableOpacity>

<CustomInput 
      label={"Enter the OTP send to your Email ID"}
      returnKeyType = 'done'
      value = {otp}
      error={otpError}
      maxLength={6}
      keyboardType="number-pad"
      onChangeText = {(text) => {
        setOtp(text);
        setOtpError('')
      } }
      placeholder = "Enter 6 digit OTP"
      onSubmitEditing = { handleSubmit }
      rightText={
        <Timer type="email" onPress={() => resendOTPHandler()} />
        
      }
      />

<View
      style = {styles.btnContainer}
      >

      <CustomBtn 
      text={'Verify Email ID'} 
      loading={loading}
      disabled={ loading }
      onPress={ () => {handleSubmit()}}
      />
      </View>

    </CustomSafeAreaView>

  );
};

const styles = StyleSheet.create({
     
  imgContainer: {
    marginHorizontal: 'auto',
    width: normalizeHeight(112),
    height: normalizeHeight(32),
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  btnContainer:{
    position: "absolute",
    bottom: 10,
    width: "100%",
    right: 0,
    left: 20,
  }
});

export default EmailOtpScreen;