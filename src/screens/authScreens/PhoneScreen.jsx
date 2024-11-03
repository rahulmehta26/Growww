import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../../components/CustomText';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../constants/color';
import Timer from '../../components/Timer';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';
import CustomBtn from '../../components/CustomBtn';
import { navigate } from '../../utility/NavUtils';
import { GlobalStyles } from '../../styles/GlobalStyle';

const PhoneScreen = () => {

  const [otpSent, setOtpSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(3)

  const handleVerifyOTP = async() => {
    if (!otp) {
      setOtpError("Enter OTP");
      if(count !== 0 ){
        setCount((prev) => prev - 1 );
      }
      return;
    }
    setLoading(true);
    // await dispatch(
    //   VerifyOTP({
    //     email: user.email || "",
    //     otp_type: "phone",
    //     data: phoneNumber,
    //     otp: otp,
    //   })
    // );
    setLoading(false);
    navigate('ProfileScreen')
  };

  const handleSendOTP = async() => {
    setLoading(true);
    // await dispatch(SendOTP({ email: user.email || "", otp_type: "phone" }));
    setOtpSent(true);
    setLoading(false);
  }

  const handlePress = () => {
    if (otpSent) {
      handleVerifyOTP();
      return;
    }
    handleSendOTP();
  }

  return (

    <KeyboardAvoidingView
    keyboardVerticalOffset={10}
    behavior='padding' 
    style = {styles.keyboardContainer}  
    >

      <CustomSafeAreaView>

      <CustomText
      variant='h4'
      fontFamily='Roboto-Medium'
      style={styles.mainContainer}
      >
        {
          otpSent ? "Verify your mobile number" : "Enter mobile number"
        }
      </CustomText>

      {
        otpSent ? (
          <View
          style = {styles.numberContainer}
          >

            <CustomText variant='h6' >
              Enter the OTP sent to +91 {phoneNumber}
            </CustomText>

            <Icon 
            name = {'edit'} 
            size = {RFValue(13)} 
            color = {Colors.Text}
            onPress = {() => setOtpSent(false) }
            />

          </View>
        ) : (

          <CustomText variant='h6' >
            Mobile number is required to invest in India
          </CustomText>
        )
      }

      {
        !otpSent ? 
        
        (
          <View
          style = {styles.phoneContainer}
          >

            <CustomText
            variant='h5'
            fontFamily='Manrope-SemiBold'
            >
              +91
            </CustomText>

            <TextInput 
            focusable = {true}
            autoFocus = {true}
            keyboardType='phone-pad'
            maxLength={10}
            placeholder='9999999999'
            style = {[{color:Colors.Text} , styles.textInput ]}
            value={phoneNumber}
            onChangeText={ (text) => {
              setPhoneNumber(text);
              setOtpError('')
            }  }
            placeholderTextColor= {Colors.Text}
            />

          </View>
        ) 
        
        : 
        
        (

          <>

          <View
          style = {styles.phoneContainer}
          >

            <TextInput 
            focusable = {true}
            autoFocus = {true}
            keyboardType='phone-pad'
            maxLength={6}
            placeholder='OTP'
            style = {[{color:Colors.Text} , styles.textInput ]}
            value={otp}
            onChangeText={ (text) => {
              setOtp(text);
            }  }
            placeholderTextColor= {Colors.Text}
            />

          </View>

          <View
          style = {styles.otpTimerContainer}
          >

            <TouchableOpacity
            style = {styles.touchableStyle}
            >

              <Timer 
              style={styles.commomText}

              type='OTP'
              onPress={() => {} }
              />

            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.touchableStyle}
            >

              <CustomText 
              style={styles.commomText}
              >
                Get OTP via call
              </CustomText>

            </TouchableOpacity>

          </View>

          </>
        )
      }

      <View
      style = {GlobalStyles.bottomBtn}
      >

        {
          otpError && (
            <View
            style = {styles.errorText}
            >

              <CustomText
              variant='h5'
              fontFamily='Roboto-Medium'
              >
                Wrong OTP, {count} attempts remaining
              </CustomText>

            </View>
          )
        }

        <CustomBtn 
        text={otpSent ? "Verify" : "Send OTP" }
        onPress={handlePress}
        loading={loading}
        disabled={loading}
        />

      </View>

      </CustomSafeAreaView>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({

  keyboardContainer:{
    flex: 1,
  },

  mainContainer:{
    marginVertical: 10,
  },

  numberContainer:{
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  phoneContainer:{
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 30,
    paddingLeft: 3,
    borderBottomColor:Colors.ThemeColor,
    borderBottomWidth: 1
  },

  textInput:{
    width: "90%",
    fontWeight: "bold",
    fontSize: RFValue(15),
  },

  otpTimerContainer:{
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    marginTop: 50,
  },

  touchableStyle:{
    backgroundColor: '#ccc',
    padding:10,
    borderRadius:7,
  },

  commomText:{
    fontSize:RFValue(12),
    color:Colors.Text,
    opacity: 0.8,
    fontFamily:'Roboto-Regular'
  },

  errorText:{
    backgroundColor: "rgba(255, 0, 0, 0.2)",
    padding: 10,
    justifyContent: "center",
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 20,
  }
})

export default PhoneScreen;