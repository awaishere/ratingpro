import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import PreAuthStack from '@stacks/PreAuthStack'
import AuthStack from '@stacks/AuthStack'
import AuthenticatedStack from '@stacks/AuthenticatedStack'
// import NetworkError from '@routes/NetworkError'

const Stack = createNativeStackNavigator();

const MainStack = () => {

  return (
    <Stack.Navigator
      initialRouteName="authStack" screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      {/* <Stack.Screen name="preAuth" component={PreAuthStack} /> */}
      <Stack.Screen name="authStack" component={AuthStack} />
      <Stack.Screen name="authenticatedStack" component={AuthenticatedStack} />
      {/* <Stack.Screen name="networkError" component={NetworkError} /> */}
    </Stack.Navigator>
  )
}

export default MainStack
