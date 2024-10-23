import { View, Text, Alert } from 'react-native';
import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const signInWithGoogle = async () => {

    try {

        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        
        const response = await GoogleSignin.signIn();

        await GoogleSignin.signOut();

        console.log("IdToken ===>", response )
      
        const googleCredential = auth.GoogleAuthProvider.credential(response?.data?.idToken);
      
        return auth().signInWithCredential(googleCredential);
        
    } catch (error) {
        Alert.alert("error", error)
    }
}   


export default {
    signInWithGoogle
} ;