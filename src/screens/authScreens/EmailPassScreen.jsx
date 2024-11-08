/* eslint-disable eol-last */
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import BackButton from '../../components/BackButton';
import {normalizeHeight} from '../../utility/ScreenDimensions';
import {goBack, navigate, resetAndNavigate} from '../../utility/NavUtils';
import CustomInput from '../../components/CustomInput';
import CustomBtn from '../../components/CustomBtn';
import GuideLineText from '../../components/GuideLineText';
import {validatePassword} from '../../utility/validationUtils';
import {logo_text} from '../../utility/imageUtils';
import {GlobalStyles} from '../../styles/GlobalStyle';
import TouchableText from '../../components/TouchableText';
import {RFValue} from 'react-native-responsive-fontsize';

const EmailPassScreen = ({route}) => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const {msg, result} = validatePassword(
      password,
      route?.params?.name,
      route?.params?.email,
    );

    if (!result) {
      setPasswordError(msg);
      return false;
    }

    setPasswordError('');
    return true;
  };

  const handleOnSubmit = async () => {
    setLoading(true);

    setTimeout(() => {
      if (validate()) {
        resetAndNavigate('PhoneScreen');
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <CustomSafeAreaView>
      <BackButton />

      <View style={styles.imgContainer}>
        <Image source={logo_text} style={styles.img} />
      </View>

      <TouchableOpacity onPress={() => goBack()}>
        <View pointerEvents="none">
          <CustomInput label="Email Address" value={route?.params?.email} />
        </View>
      </TouchableOpacity>

      <CustomInput
        label={'Enter Password'}
        returnKeyType="done"
        value={password}
        autoFocus={true}
        error={passwordError}
        onChangeText={text => {
          setPassword(text);
          setPasswordError('');
        }}
        placeholder="8-20 Characters"
        onSubmitEditing={handleOnSubmit}
        password
      />

      <TouchableText
        firstText="Forget Password"
        style={styles.forgetText}
        onPress={() =>
          navigate('ForgetPassword', {
            email: route?.params?.email,
          })
        }
      />

      <View style={GlobalStyles.bottomBtn}>
        <GuideLineText
          text={[
            'Password must have at least one uppercase and lowercase letter.',
            'Must contain atleast one number and one special character.',
            "Must not contain user's first/last name and email id.",
          ]}
        />

        <CustomBtn
          text={'Continue'}
          loading={loading}
          disabled={loading}
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

  forgetText: {
    fontSize: RFValue(12),
    marginTop: 5,
    alignSelf: 'flex-end',
  },
});

export default EmailPassScreen;
