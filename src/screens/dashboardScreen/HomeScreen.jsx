/* eslint-disable quotes */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import {normalizeHeight} from '../../utility/ScreenDimensions';
import BottomTab from '../../navigation/BottomTab';
import { logo_text } from '../../utility/imageUtils';

const HomeScreen = () => {

  return (

    <CustomSafeAreaView>

      <View style={styles.imgContainer}>
        <Image source={logo_text} style={styles.img} />
      </View>

      <Text style={{color: 'purple'}}>cygvjhbkl</Text>

      <BottomTab />

    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },

  subText: {
    marginTop: 16,
    opacity: 0.6,
  },

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

export default HomeScreen;
