import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mergedQueue } from './AllScreenNavigation';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (

        <Stack.Navigator
        screenOptions={ () => ({
            headerShown: false,
        }) }
        initialRouteName='LoginScreen'
        >

            {
                mergedQueue.map((item, index) => {
                    return(
                        <Stack.Screen 
                        key={index}
                        name={item.name}
                        component={item.component}
                        />
                    )
                } )
            }

        </Stack.Navigator>

  );
};

export default MainNavigator;