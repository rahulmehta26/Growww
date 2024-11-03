import {View, Text} from 'react-native';
import React, {useState} from 'react';
import BiometricVerification from './BiometricVerification';
import ResetPin from './ResetPin';

const AuthVerifySCreen = ({onForgotPin}) => {
  const [authCheck, setAuthCheck] = useState('Biometric');

  return (
    <>
      {authCheck === 'Biometric' ? (
        <BiometricVerification onForgotPin={() => setAuthCheck('ResetPin')} />
      ) : (
        <ResetPin />
      )}
    </>
  );
};

export default AuthVerifySCreen;
