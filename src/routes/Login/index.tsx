import React from 'react'
import Background from '@components/Background'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import GeneralStatusBarColor from '@src/components/GeneralStatusBar'
import styles from './styles'
import { Formik } from 'formik';
import TextInput from '@components/TextInput'
import * as Yup from 'yup';
import colors from '@src/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '@components/Button'
import { responsiveFontSize } from '@src/library/viewHelper'
import { Image, Text, View } from 'react-native'
import { Google } from '@src/assets/images'

const LOGIN_FIELDS = {
  username: '',
  password: ''
}

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .required('Required'),

});

function index(props: any) {

  const login = () => {
    props.navigation.navigate('authenticatedStack')
  }

  return (
    <React.Fragment>
      <GeneralStatusBarColor barStyle="dark-content" />
      <Background />

      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.container}
        extraHeight={20}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.placeholder} />

        <Formik
          initialValues={{ ...LOGIN_FIELDS }}
          validationSchema={LoginSchema}
          onSubmit={login}
        >
          {
            ({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <TextInput
                  color={colors.secondaryGrey}
                  selectionColor={colors.secondaryGrey}
                  value={values.username || ''}
                  error={errors.username}
                  errorVisible={errors.username && touched.username}
                  placeholder={"Username"}
                  onChangeText={handleChange('username')}
                  textInputWrapper={styles.textContainer}
                />

                <TextInput
                  color={colors.secondaryGrey}
                  selectionColor={colors.secondaryGrey}
                  value={values.password || ''}
                  error={errors.password}
                  errorVisible={errors.password && touched.password}
                  placeholder={"Password"}
                  onChangeText={handleChange('password')}
                  textInputWrapper={styles.textContainer}
                  password={true}
                />

                <Button
                  label={"Sign In"}
                  handleClick={handleSubmit}
                  buttonStyle={styles.btnStyle}
                  labelStyle={styles.labelStyle}
                />

                <Text style={styles.footer}>OR</Text>


                <Button
                  label={"Sign in with Facebook"}
                  handleClick={() => { }}
                  Icon={<Icon name="facebook-f" color={colors.white} size={responsiveFontSize(25)} style={styles.icon} />}
                  buttonStyle={styles.facebookBtn}
                  labelStyle={styles.labelStyle}
                />

                <Button
                  label={"Sign in with google"}
                  handleClick={() => { }}
                  Icon={<Image source={Google} style={styles.icon} />}
                  buttonStyle={styles.googleBtn}
                  labelStyle={styles.googleLbl}
                />
              </>
            )}
        </Formik>
      </KeyboardAwareScrollView>
    </React.Fragment>
  )
}

export default index
