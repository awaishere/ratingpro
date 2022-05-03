import { SFProDisplay } from '@src/fonts'
import { responsiveFontSize } from '@src/library/viewHelper'
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

function index({ item }: any) {
  return (
    <React.Fragment>
      <View style={[styles.row, styles.p1]}>
        <Image source={item.editor.pic} style={styles.headerImage} />

        <Text style={styles.headerText}>{item.editor.name}</Text>
      </View>

      <Image source={item.image} style={styles.postImage} />
    </React.Fragment>
  )
}

export default index

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  p1: {
    paddingHorizontal: responsiveFontSize(7),
    marginBottom: responsiveFontSize(7),
  },
  headerText: {
    fontSize: responsiveFontSize(13),
    fontFamily: SFProDisplay
  },
  headerImage: {
    resizeMode: 'contain',
    marginRight: responsiveFontSize(10),
    height: responsiveFontSize(30),
    width: responsiveFontSize(30)
  },
  postImage: {
    resizeMode: 'cover',
    height: responsiveFontSize(350),
    width: '100%',
    borderRadius: responsiveFontSize(4)
  }
})
