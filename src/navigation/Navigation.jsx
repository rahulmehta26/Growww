/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { navigationRef } from '../utility/NavUtils';
import MainNavigator from './MainNavigator';


const Navigation = () => {
  return (

       <NavigationContainer ref={navigationRef} >

           <MainNavigator />

       </NavigationContainer>
  )
}

export default Navigation;