/* eslint-disable quotes */
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import CustomText from '../../components/CustomText';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import login_animation from '../../assets/images/login_animation.png'
import { screenHeight, screenWidth } from '../../utility/ScreenDimensions';
import SocialLoginBtn from '../../components/SocialLoginBtn';
import google from '../../assets/images/google.png'
import apple from '../../assets/images/apple.png'
import TouchableText from '../../components/TouchableText';
import { Colors } from '../../constants/color';
import { signInWithGoogle } from '../../redux/GoogleLogin';
import { navigate } from '../../utility/NavUtils';

const HomeScreen = () => {
  return (

    <CustomSafeAreaView>

    <View
    style={styles.container}
    >
      
      <CustomText variant='h1' fontFamily='Roboto-Medium' >
        Together we Groww 
      </CustomText>

      <CustomText variant='h6' fontFamily='Roboto-Bold' style={styles.subText} >
        Invest ● Pay ● Loans
      </CustomText>

      <View
      style = {styles.imgContainer}
      >
        
        <Image
        source={login_animation}
        style = {styles.img}
        />

      </View>

      <SocialLoginBtn 
      icon={<Image source={google} style = {{width:20, height:20}} />}
      text='Continue with Google' 
      onPress={() => signInWithGoogle() }
      />

     <SocialLoginBtn 
      icon={<Image source={apple} style = {{width:20, height:20}} />}
      text='Continue with Apple' 
      onPress={() => {} }
      />

      <TouchableText 
      firstText='Use other email ID' 
      onPress={() => navigate('EmailScreen') }
      style={{marginVertical:30, marginTop:20}}
      />

   <CustomText variant='h8' fontFamily='Roboto-Regular' style={styles.bottomText}>
      By proceeding, I accept Groww's 
      <Text style={styles.underlineText}>
        {" "}T&C Privacy Policy. Tariff Rates. FATCA Declaration & CIBIL T&C
      </Text>
    </CustomText>

    </View>
    </CustomSafeAreaView>
  )
};

const styles = StyleSheet.create({

  container: {
    justifyContent:'center',
    alignItems:'center',
    paddingTop:20,
  },

  subText: {
    marginTop:16,
    opacity: 0.6,
  },

  imgContainer:{
     width:screenWidth,
     height:screenHeight / 2.1,
     marginVertical: 16,
  },

  img: {
    width:'100%',
    height:'100%',
    resizeMode:'contain',
  },

  bottomText:{
    fontSize:12,
    textAlign:'center',
    opacity: 0.6,
  },

  underlineText:{
    textDecorationLine:'underline',
  },

});

export default HomeScreen;