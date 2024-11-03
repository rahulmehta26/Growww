import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/color';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import BackButton from '../../components/BackButton';
import CustomText from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import CustomDateInput from '../../components/CustomDateInput';
import CustomRadioBtn from '../../components/CustomRadioBtn';
import CustomBtn from '../../components/CustomBtn';
import {GlobalStyles} from '../../styles/GlobalStyle';
import { navigate } from '../../utility/NavUtils';

const ProfileScreen = () => {
  const [inputs, setInputs] = useState({
    name: '',
    date_of_birth: '',
    gender: '',
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnChange = (text, inputNames) => {
    setInputs(prevInputs => ({
      ...prevInputs,
      [inputNames]: text,
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [inputNames]: undefined,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!inputs.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!inputs.date_of_birth.trim()) {
      newErrors.date_of_birth = 'Date is required';
    }
    if (!inputs.gender.trim()) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);

    setIsFormValid(Object.keys(newErrors).length === 0);

    return Object.keys(newErrors).length === 0;
  };

  const handleOnSubmit = async () => {
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        navigate('PinScreen');

        setLoading(false);
      }, 2000);
      // await dispatch(UpdateProfile(inputs));
    }
  };

  return (
    <CustomSafeAreaView>
      <BackButton />

      <CustomText variant="h3" fontFamily="Roboto-Bold" style={styles.headText}>
        Personal Details
      </CustomText>

      <CustomInput
        label="Name (AS PER YOUR PAN CARD)"
        returnKeyType="done"
        value={inputs?.name}
        error={errors?.name}
        onChangeText={text => handleOnChange(text, 'name')}
      />

      <CustomDateInput
        label="Date of Birth"
        error={errors?.date_of_birth}
        onDateChange={text => {
          handleOnChange(text, 'date_of_birth');
        }}
      />

      <CustomRadioBtn
        label="Gender"
        error={errors.gender}
        options={['male', 'female', 'others']}
        onSelect={text => {
          return handleOnChange(text, 'gender');
        }}
        selected={inputs?.gender}
      />

      <View style={GlobalStyles.bottomBtn}>
        <CustomBtn
          text="Next"
          disabled={loading}
          loading={loading}
          onPress={handleOnSubmit}
        />
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  headText: {
    marginVertical: 10,
  },
});

export default ProfileScreen;
