/* eslint-disable eol-last */
import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import {navigate, resetAndNavigate} from '../../utility/NavUtils';
import CustomText from '../../components/CustomText';
import {RFValue} from 'react-native-responsive-fontsize';
import OtpBox from '../../components/OtpBox';
import CustomKeyBoard from '../../components/CustomKeyBoard';
import BackButton from '../../components/BackButton';

const PinScreen = ({route}) => {
  const [otpValue, setOtpValues] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [otpError, setOtpError] = useState(null);

  const handleNumber = number => {
    if (focusedIndex < otpValue.length) {
      const newOtpValues = [...otpValue];

      newOtpValues[focusedIndex] = number.toString();
      setOtpError(null);
      setOtpValues(newOtpValues);
      setFocusedIndex(focusedIndex + 1);
    }
  };

  const handleBackspace = () => {
    if (focusedIndex > 0) {
      const newOtpValues = [...otpValue];
      newOtpValues[focusedIndex - 1] = '';
      setOtpValues(newOtpValues);
      setFocusedIndex(focusedIndex - 1);
    }
  };

  const handleCheckmark = () => {
    let valid = false;
    const isNotEmpty = otpValue.map(i => {
      if (i == '') {
        valid = true;
        setOtpError('Enter all pin');
      }
    });

    if (otpValue.toString() != route.params.pin) {
      valid = true;
      setOtpValues(['', '', '', '']);
      setFocusedIndex(0);
      setOtpError('PIN not matching');
    }

    if (!valid) {
      resetAndNavigate('AccProtectedScreen');
    }
  };

  return (
    <CustomSafeAreaView>

      <BackButton />
      
      <CustomText
        variant="h4"
        fontFamily="Roboto-Bold"
        style={styles.mainContainer}>
        Confirm your Groww PIN
      </CustomText>

      <CustomText fontFamily="Roboto-Regular">
        To keep your finances secure, we'll ask for this PIN every time you open
        the app
      </CustomText>

      <OtpBox
        otpValues={otpValue}
        error={otpError}
        focusedIndex={focusedIndex}
      />

      <CustomKeyBoard
        onPressBackspace={handleBackspace}
        onPressCheckmark={handleCheckmark}
        onPressNumber={handleNumber}
      />
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    marginBottom: 20,
  },

  subText: {
    fontSize: RFValue(11.5),
  },
});

export default PinScreen;
