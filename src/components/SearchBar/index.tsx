import React, { useState } from 'react';
import { View, TextInput, ViewStyle, StyleProp, TextStyle, StyleSheet, KeyboardTypeOptions, Text, TouchableOpacity } from 'react-native';
import colors from '@src/colors'
import { SFProDisplay } from '@src/fonts';
import { responsiveFontSize } from '@src/library/viewHelper';
import Icon from 'react-native-vector-icons/Ionicons'

interface TextInputProps {
  color: string
  selectionColor?: string
  placeholder: string
  textInputWrapper?: StyleProp<ViewStyle>
  textInputStyle?: StyleProp<TextStyle>
  onChangeText?: (text: string) => void
  keyboardType?: KeyboardTypeOptions
  value?: string
  onFocus?: any
  onBlur?: any
  onSubmitEditing?: any
}

interface Styles {
  wrapper: ViewStyle
  label: TextStyle
  icon: TextStyle
}

const CustomTextInput = (props: TextInputProps) => {

  return (
    <>
      <View style={[styles.wrapper, props.textInputWrapper, { paddingRight: '13%' }]}>
        <TextInput
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          style={[styles.label, props.textInputStyle]}
          placeholderTextColor={props.color}
          placeholder={props.placeholder}
          // value={props.value}
          onSubmitEditing={props.onSubmitEditing}
          // onChangeText={props.onChangeText}
          selectionColor={props.selectionColor}
        />


        <TouchableOpacity style={styles.icon}>
          <Icon name={'search'} size={responsiveFontSize(22)} color={colors.pureGrey} />
        </TouchableOpacity>


      </View>
    </>
  )
}

export default CustomTextInput;

const styles = StyleSheet.create<Styles>({
  wrapper: {
    borderColor: colors.lightGrey,
    borderWidth: responsiveFontSize(1),
    borderRadius: responsiveFontSize(4)
  },
  label: {
    padding: responsiveFontSize(14),
    fontFamily: SFProDisplay,
    color: colors.secondaryGrey,
    fontSize: responsiveFontSize(13),
  },
  icon: {
    position: 'absolute',
    right: '7%',
    top: '20%'
  }
})
