import React from 'react'
import Background from '@components/Background'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import GeneralStatusBarColor from '@src/components/GeneralStatusBar'
import styles from './styles'
import { Formik } from 'formik';
import TextInput from '@components/TextInput'
import * as Yup from 'yup';
import { responsiveFontSize } from '@src/library/viewHelper'
import colors from '@src/colors'

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

function index() {

  return (
    <React.Fragment>
      <GeneralStatusBarColor barStyle="dark-content" />
      <Background />

      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        extraHeight={20}
      >
        <Formik
          initialValues={{ ...LOGIN_FIELDS }}
          validationSchema={LoginSchema}
          onSubmit={() => { }}
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
                  textInputStyle={{ fontSize: responsiveFontSize(15) }}
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
                  textInputStyle={{ fontSize: responsiveFontSize(15) }}
                  onChangeText={handleChange('password')}
                  textInputWrapper={styles.textContainer}
                  password={true}
                />
                {/* <Button
                    label={"Get OTP"}
                    handleClick={handleSubmit}
                    buttonStyle={styles.btnStyle}
                    labelStyle={styles.labelStyle}
                  /> */}
              </>
            )}
        </Formik>
      </KeyboardAwareScrollView>
    </React.Fragment>
  )
}

export default index
