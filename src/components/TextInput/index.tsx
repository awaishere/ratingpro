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
  password?: boolean
  onChangeText: (text: string) => void
  keyboardType?: KeyboardTypeOptions
  value?: string
  error?: any
  errorVisible?: any
  onFocus?: any
  onBlur?: any
  onSubmitEditing?: any
}

interface Styles {
  wrapper: ViewStyle
  label: TextStyle
  errorLabel: TextStyle
  icon: TextStyle
}

const CustomTextInput = (props: TextInputProps) => {
  const [passwordVisible, togglePassword] = useState(false)
  return (
    <>
      <View style={[styles.wrapper, props.textInputWrapper, props.password && { paddingRight: '13%' }]}>
        <TextInput
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          style={[styles.label, props.textInputStyle]}
          placeholderTextColor={props.color}
          placeholder={props.placeholder}
          secureTextEntry={passwordVisible ? false : props.password}
          value={props.value}
          onSubmitEditing={props.onSubmitEditing}
          onChangeText={props.onChangeText}
          selectionColor={props.selectionColor}
        />

        {
          props.password &&
          <TouchableOpacity onPress={() => togglePassword(!passwordVisible)} style={styles.icon}>
            <Icon name={passwordVisible ? "eye-off" : 'eye'} size={responsiveFontSize(25)} color={colors.secondaryGrey} />
          </TouchableOpacity>

        }
      </View>

      {
        props.errorVisible &&
        <Text style={[props.textInputWrapper, styles.errorLabel]}>{props.error}</Text>
      }
    </>
  )
}

export default CustomTextInput;

const styles = StyleSheet.create<Styles>({
  wrapper: {
    borderColor: colors.lightGrey,
    borderWidth: responsiveFontSize(1),
    borderRadius: responsiveFontSize(5)
  },
  label: {
    padding: responsiveFontSize(20),
    fontFamily: SFProDisplay,
    color: colors.secondaryGrey,
    fontSize: responsiveFontSize(17),
  },
  errorLabel: {
    marginTop: 0,
    fontSize: responsiveFontSize(11),
    fontFamily: SFProDisplay,
    color: colors.red,
  },
  icon: {
    position: 'absolute',
    right: '7%',
    top: '30%'
  }
})
