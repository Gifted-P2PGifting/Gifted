import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LogIn"
        component={LoginScreen}
        options={{
          title: 'Gifted',
          headerRight: () => (
            <AntDesign name="gift" size={35} style={{ marginRight: 10 }} />
          ),
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'Gifted',
          headerRight: () => (
            <AntDesign name="gift" size={35} style={{ marginRight: 10 }} />
          ),
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
