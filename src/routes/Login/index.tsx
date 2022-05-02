import React from 'react'
import { TextInput } from 'react-native'
import Background from '@components/Background'
import Icon from '@library/CustomIcon'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import GeneralStatusBarColor from '@src/components/GeneralStatusBar'
import colors from '@src/colors'

function index() {

  return (
    <React.Fragment>
      <GeneralStatusBarColor barStyle="dark-content" />
      <Background />

      <KeyboardAwareScrollView extraHeight={20}>

      </KeyboardAwareScrollView>
    </React.Fragment>
  )
}

export default index
