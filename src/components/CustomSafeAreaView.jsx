import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const CustomSafeAreaView = ({
    children
}) => {
  return (
    <SafeAreaView
    style = {styles.container}
    >
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor: 'white',
    },
  });

export default CustomSafeAreaView