import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {Colors} from '../constants/color';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomKeyBoard = ({
  onPressNumber,
  onPressBackspace,
  onPressCheckmark,
  customFont,
}) => {
  const buttons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['backspace', 0, 'check'],
  ];

  const renderButton = (label, onPress) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {typeof label === 'number' ? (
        <CustomText
          variant="h2"
          fontFamily={'Manrope-SemiBold'}
          style={styles.buttonText}>
          {label}
        </CustomText>
      ) : (
        <Icon name={label} size={RFValue(24)} color={Colors.Text} />
      )}
    </TouchableOpacity>
  );

  const renderIconButton = (icon, onPress) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={icon} size={RFValue(24)} color={Colors.Text} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item, index) => {

            if (item === 'backspace') {
              return renderButton(item, onPressBackspace);
            } else if (item === 'check') {
              return renderButton(item, onPressCheckmark);
            } else {
              return renderButton(item, () => onPressNumber(item));
            }

          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  touchText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    marginBottom: 5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 5,
  },

  button: {
    border: 5,
    borderRadius: 5,
    width: '30%',
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Card,
  },

  buttonText: {
    fontSize: 20,
  },
});

export default CustomKeyBoard;
