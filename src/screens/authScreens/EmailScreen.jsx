/* eslint-disable eol-last */
import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import BackButton from '../../components/BackButton';
import {normalizeHeight} from '../../utility/ScreenDimensions';
import CustomInput from '../../components/CustomInput';
import CustomBtn from '../../components/CustomBtn';
import {navigate} from '../../utility/NavUtils';
import {validateEmail} from '../../utility/validationUtils';
import {logo_text} from '../../utility/imageUtils';
import {GlobalStyles} from '../../styles/GlobalStyle';

const EmailScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleOnSubmit = async () => {
    setLoading(true);

    setTimeout(() => {
      if (validate()) {
        // navigate("EmailOtpScreen", {email:email});

        navigate('EmailPassScreen', {
          email: email,
        });
        // await dispatch(CheckEmail({ email: email.toLowerCase() }));
      }
      setLoading(false);
    }, 200);
  };

  return (
    <CustomSafeAreaView>
      <BackButton />

      <View style={styles.imgContainer}>
        <Image source={logo_text} style={styles.img} />
      </View>

      <CustomInput
        label={'Email Address'}
        returnKeyType="done"
        value={email}
        inputMode="email"
        focusable={true}
        autofocus={true}
        error={emailError}
        onEndEditing={() => validate()}
        onChangeText={text => {
          setEmail(text);
          setEmailError('');
        }}
        placeholder="eg: example@gmail.com"
        onSubmitEditing={handleOnSubmit}
      />

      <View style={GlobalStyles.bottomBtn}>
        <CustomBtn
          text={'Next'}
          loading={loading}
          disabled={!validateEmail(email) || loading}
          onPress={() => {
            handleOnSubmit();
          }}
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
});

export default EmailScreen;
