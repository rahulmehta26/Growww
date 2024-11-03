import { View, Text } from 'react-native';
import React, { useState } from 'react';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import BackButton from '../../components/BackButton';
import CustomInput from '../../components/CustomInput';

const ForgetPassword = ({route}) => {

  const [otpSent, setOtpSent] = useState(false);
  const [inputs, setInputs] = useState({
    password: "",
    confirmpassword: "",
    otp: "",
  });
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <CustomSafeAreaView>

        <BackButton />

        <CustomInput 
        label="Enter Password"
        placeholder="8-20 Characters"
        />

        <CustomInput 
        label="Confirm New Password"
        placeholder="8-20 Characters"
        />

    </CustomSafeAreaView>
  );
};

export default ForgetPassword;