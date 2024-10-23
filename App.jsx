
import React from 'react';
import Navigation from './src/navigation/Navigation';
import { GoogleSignin } from "@react-native-google-signin/google-signin";

 GoogleSignin.configure({

  webClientId: WEB_CLIENT_ID,

  forceCodeForRefreshToken: true,

})

function App() {

  return (

    <Navigation />
  );
}

export default App;
