import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome/index';
import SignIn from '../pages/SinghIn/index';
import Register from '../pages/Register/index';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen

        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}