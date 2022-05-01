import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@routes/Login'

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="login" screenOptions={{
      headerShown: false,
      gestureEnabled: true,
    }}>
    <Stack.Screen name="login" component={Login} />
  </Stack.Navigator>
)

export default AuthStack
