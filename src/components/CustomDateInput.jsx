import { View, Text, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';

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

  const handleDayChange = (text) => {
    setIsDayFocused(true);
    let formattedDay = text.replace(/\D/g, "").substring(0, 2); // Remove non-numeric characters and limit to 2 digits
    setDay(formattedDay);
    if (formattedDay.length === 2) {
      setIsDayFocused(false);
      setIsMonthFocused(true);
      monthInputRef.current?.focus();
    }
    updateDate(formattedDay, month, year);
  };

  const handleMonthChange = (text) => {
    setIsMonthFocused(true);
    let formattedMonth = text.replace(/\D/g, "").substring(0, 2);
    setMonth(formattedMonth);
    if (formattedMonth.length === 2) {
      setIsMonthFocused(false);
      setIsYearFocused(true);
      yearInputRef.current?.focus();
    }
    updateDate(day, formattedMonth, year);
  };

  const handleYearChange = (text) => {
    setIsYearFocused(true);
    let formattedYear = text.replace(/\D/g, "").substring(0, 4);
    setYear(formattedYear);
    if (formattedYear.length === 4) {
      setIsYearFocused(false);
      yearInputRef.current?.blur();
      updateDate(day, month, formattedYear);
    }
  };

  const updateDate = (dd, mm, yyyy) => {
    const formattedDate = `${dd}-${mm}-${yyyy}`;
    onDateChange(formattedDate);
  };

  const handleDateChange = (selectedDate) => {
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString();
      const dateParts = formattedDate.split("/");
      if (dateParts.length === 3) {
        setDay(dateParts[0].padStart(2, "0"));
        setMonth(dateParts[1].padStart(2, "0"));
        setYear(dateParts[2].padStart(4, "0"));
        updateDate(dateParts[0], dateParts[1], dateParts[2]);
      }
    }
    setShowDatePicker(false);
  };

  return (

    <View
    style = {styles.inputMainContainer }
    >
      <Text>CustomDateInput</Text>
    </View>
  );
};

const styles = StyleSheet.create({

    inputMainContainer:{
        marginVertical: 8,
    }
})

export default CustomDateInput;