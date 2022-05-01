import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '@routes/Main'
import Profile from '@routes/Profile'

const Stack = createNativeStackNavigator();

function AuthStack() {

  return (
    <Stack.Navigator
      initialRouteName="main" screenOptions={{
        headerShown: false,
        gestureEnabled: true
      }}>
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  )
}
export default AuthStack
