import React from 'react'
import { View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainStack from '@stacks/MainStack'

import { navigationRef } from '@utils/RootNavigation';

const MyTheme = {
  ...DefaultTheme,
};


function Main(props) {

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer theme={MyTheme} ref={navigationRef}>
        <MainStack />
      </NavigationContainer>

    </View>
  )
}

export default Main
