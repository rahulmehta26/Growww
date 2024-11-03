import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import React, {useRef, useState} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Colors} from '../constants/color';
import CustomText from './CustomText';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomDateInput = ({
  label,
  error,
  disabled,
  disabledBackground,
  required,
  textInputStyle,
  onFocus = () => {},
  onDateChange = () => {},
  ...props
}) => {
  const [isDayFocused, setIsDayFocused] = useState(false);
  const [isMonthFocused, setIsMonthFocused] = useState(false);
  const [isYearFocused, setIsYearFocused] = useState(false);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const dayInputRef = useRef(null);

  const handleDayChange = text => {
    setIsDayFocused(true);
    let formattedDay = text.replace(/\D/g, '').substring(0, 2);
    setDay(formattedDay);
    if (formattedDay.length === 2) {
      setIsDayFocused(false);
      setIsMonthFocused(true);
      monthInputRef.current?.focus();
    }
    updateDate(formattedDay, month, year);
  };

  const handleMonthChange = text => {
    setIsMonthFocused(true);
    let formattedMonth = text.replace(/\D/g, '').substring(0, 2);
    setMonth(formattedMonth);

    if (formattedMonth.length === 0) {
      setIsMonthFocused(false);
      setIsDayFocused(true);
      dayInputRef.current?.focus();
    } else if (formattedMonth.length === 2) {
      setIsMonthFocused(false);
      setIsYearFocused(true);
      yearInputRef.current?.focus();
    }
    updateDate(day, formattedMonth, year);
  };

  const handleYearChange = text => {
    setIsYearFocused(true);
    let formattedYear = text.replace(/\D/g, '').substring(0, 4);
    setYear(formattedYear);

    if (formattedYear.length === 0) {
      setIsYearFocused(false);
      setIsMonthFocused(true);
      monthInputRef.current?.focus();
    } else if (formattedYear.length === 4) {
      setIsYearFocused(false);
      yearInputRef.current?.blur();
      updateDate(day, month, formattedYear);
    }
  };

  const updateDate = (dd, mm, yyyy) => {
    const formattedDate = `${dd}-${mm}-${yyyy}`;
    onDateChange(formattedDate);
  };

  const handleDateChange = selectedDate => {
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString();
      const dateParts = formattedDate.split('/');
      if (dateParts.length === 3) {
        setDay(dateParts[0].padStart(2, '0'));
        setMonth(dateParts[1].padStart(2, '0'));
        setYear(dateParts[2].padStart(4, '0'));
        updateDate(dateParts[0], dateParts[1], dateParts[2]);
      }
    }
     setShowDatePicker(false);
  };

  return (
    <View style={styles.inputMainContainer}>
      {label && (
        <View style={styles.labelContainer}>
          <Text
            style={[
              styles.labelText,
              {
                color: Colors.Text,
              },
            ]}>
            {label} {required && '*'}
          </Text>
        </View>
      )}

      <View style={styles.inputCoontainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
          }}>
          <TextInput
            ref={dayInputRef}
            placeholderTextColor={'#cfd0d3'}
            style={[
              styles.textInput,
              {
                ...textInputStyle,
                color: Colors.Text,
                borderColor: error
                  ? Colors.ErrorColor
                  : isDayFocused
                  ? Colors.Profit
                  : Colors.Border,
                borderBottomWidth: isDayFocused ? 2 : 1,
                width: 32,
              },
            ]}
            placeholder="DD"
            maxLength={2}
            autoCorrect={false}
            keyboardType="numeric"
            onFocus={() => {
              onFocus();
              setIsDayFocused(true);
            }}
            onChangeText={handleDayChange}
            onBlur={() => {
              setIsDayFocused(false);
            }}
            editable={!disabled}
            value={day}
            {...props}
          />

          <CustomText variant="h3" style={{color: Colors.Border}}>
            {' '}
            /{' '}
          </CustomText>

          <TextInput
            ref={monthInputRef}
            placeholderTextColor={'#cfd0d3'}
            style={[
              styles.textInput,
              {
                ...textInputStyle,
                color: Colors.Text,
                borderColor: error
                  ? Colors.ErrorColor
                  : isDayFocused
                  ? Colors.Profit
                  : Colors.Border,
                borderBottomWidth: isDayFocused ? 2 : 1,
                width: 32,
              },
            ]}
            placeholder="MM"
            maxLength={2}
            autoCorrect={false}
            keyboardType="numeric"
            onFocus={() => {
              onFocus();
              setIsMonthFocused(true);
            }}
            onChangeText={handleMonthChange}
            onBlur={() => {
              setIsMonthFocused(false);
            }}
            editable={!disabled}
            value={month}
            {...props}
          />

          <CustomText variant="h3" style={{color: Colors.Border}}>
            {' '}
            /{' '}
          </CustomText>

          <TextInput
            ref={yearInputRef}
            placeholderTextColor={'#cfd0d3'}
            style={[
              styles.textInput,
              {
                ...textInputStyle,
                color: Colors.Text,
                borderColor: error
                  ? Colors.ErrorColor
                  : isDayFocused
                  ? Colors.Profit
                  : Colors.Border,
                borderBottomWidth: isDayFocused ? 2 : 1,
                width: 52,
              },
            ]}
            placeholder="YYYY"
            maxLength={4}
            autoCorrect={false}
            keyboardType="numeric"
            onFocus={() => {
              onFocus();
              setIsYearFocused(true);
            }}
            onChangeText={handleYearChange}
            onBlur={() => {
              setIsYearFocused(false);
            }}
            editable={!disabled}
            value={year}
            {...props}
          />
        </View>

        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.iconContainer}>
          <Icon
            size={RFValue(20)}
            name="calendar-month"
            color={Colors.ThemeColor}
          />
        </TouchableOpacity>

        <DateTimePicker     
        isVisible = {showDatePicker}
        mode='date'
        onConfirm={handleDateChange}
        onCancel={() => setShowDatePicker(false) }
        />
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Icon size={RFValue(15)} name="error" style={styles.errorText} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputMainContainer: {
    marginVertical: 10,
  },

  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 2,
  },

  labelText: {
    fontSize: RFValue(14),
    fontFamily: 'Roboto-Medium',
  },

  inputCoontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  textInput: {
    fontFamily: 'Roboto-Regular',
    fontSize: RFValue(15),
    alignItems: 'flex-start',
    height: 30,
    paddingVertical: 7,
  },

  iconContainer: {
    marginLeft: 10,
  },

  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    gap: 5,
  },
  errorText: {
    color: Colors.ErrorColor,
    fontSize: RFValue(13),
    fontFamily: 'Roboto-Medium',
  },
});

export default CustomDateInput;
