import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet
}
  from 'react-native'
import { SFProDisplayMedium } from '@src/fonts'
import { responsiveFontSize } from '@src/library/viewHelper'

interface IProps {
  label: string
  buttonStyle: StyleProp<ViewStyle>
  labelStyle: StyleProp<TextStyle>
  handleClick: () => void
  Icon?: React.ReactNode
}

interface Styles {
  button: ViewStyle
  label: TextStyle
}

function Button(props: IProps) {
  return (
    <TouchableOpacity onPress={props.handleClick} style={[styles.button, props.buttonStyle]}>
      <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>

      {props.Icon}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create<Styles>({
  button: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveFontSize(48),
    borderRadius: responsiveFontSize(6)
  },
  label: {
    fontFamily: SFProDisplayMedium,
    fontSize: responsiveFontSize(14)
  }
})
