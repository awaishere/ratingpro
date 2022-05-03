import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import colors from '@src/colors'
import { SFProDisplay } from '@src/fonts'
import { responsiveFontSize } from '@src/library/viewHelper'
import Icon from 'react-native-vector-icons/FontAwesome'

function index({ item }: any) {
  return (
    <View style={[styles.row, styles.between, styles.right, styles.mtop]}>
      <Text style={styles.h6}>
        {`${item.commentor.name}  `}
        <Text style={styles.p}>{item.message}</Text>
      </Text>

      <TouchableOpacity>
        <Icon name="heart-o" size={responsiveFontSize(14)} />
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  between: {
    justifyContent: 'space-between'
  },
  mtop: {
    marginTop: responsiveFontSize(2)
  },
  h6: {
    width: '85%',
    fontSize: responsiveFontSize(14),
    color: colors.black,
    fontFamily: SFProDisplay
  },
  p: {
    color: colors.pureGrey,
    fontSize: responsiveFontSize(12),
    letterSpacing: 1,
    fontFamily: SFProDisplay,
  },
  right: {
    paddingRight: responsiveFontSize(10),
    paddingTop: responsiveFontSize(10)
  }
})
