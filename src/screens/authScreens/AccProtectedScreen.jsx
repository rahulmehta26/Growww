/* eslint-disable eol-last */
import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {resetAndNavigate} from '../../utility/NavUtils';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import {logo_text} from '../../utility/imageUtils';
import {normalizeHeight} from '../../utility/ScreenDimensions';
import LottieView from 'lottie-react-native';
import Anim from '../../assets/animations/confirm.json';

const AccProtectedScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      resetAndNavigate('HomeScreen');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CustomSafeAreaView>
      
      <View style={styles.imgContainer}>
        <Image source={logo_text} style={styles.img} />
      </View>

      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <LottieView
            source={Anim}
            speed={0.9}
            loop={false}
            style={styles.animation}
            autoPlay
          />
        </View>
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

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animationContainer: {
    height: 280,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: '100%',
    height: 120,
  },
});

export default AccProtectedScreen;
