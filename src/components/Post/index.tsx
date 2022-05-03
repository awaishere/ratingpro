import colors from '@src/colors'
import { SFProDisplay, SFProDisplayBold } from '@src/fonts'
import CustomIcon from '@src/library/CustomIcon'
import { responsiveFontSize } from '@src/library/viewHelper'
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { P1 } from '@src/assets/images'

function index({ item, navigation }: any) {
  return (
    <React.Fragment>
      <View style={[styles.row, styles.between]}>
        <TouchableOpacity onPress={() => navigation.navigate('profile')} style={[styles.row, styles.p1]}>
          <Image source={item.editor.pic} style={styles.headerImage} />

          <Text style={styles.headerText}>{item.editor.name}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name={"dots-vertical"} style={styles.customBtn} size={responsiveFontSize(20)} />
        </TouchableOpacity>
      </View>

      <Image source={item.image} style={styles.postImage} />

      <View style={[styles.row, styles.between, styles.top]}>
        <View style={styles.row}>
          <View style={styles.row}>
            <TouchableOpacity>
              <CustomIcon name={"like"} style={styles.customBtn} size={responsiveFontSize(20)} color={item.isLiked ? colors.red : colors.black} />
            </TouchableOpacity>
            <Text style={styles.stats}>{item.likes}</Text>
          </View>

          <View style={[styles.row, styles.left]}>
            <TouchableOpacity>
              <CustomIcon name={"comment"} style={styles.customBtn} size={responsiveFontSize(20)} />
            </TouchableOpacity>
            <Text style={styles.stats}>{item.comments.length}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity>
            <CustomIcon name={"dislike"} style={styles.customBtn} size={responsiveFontSize(20)} />
          </TouchableOpacity>
          <Text style={styles.stats}>{item.dislikes}</Text>
        </View>
      </View>

      <View style={[styles.row, styles.between, styles.top]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.created_at}>{item.created_at}</Text>
      </View>

      <Text style={styles.description}>{item.description}</Text>

      <View style={[styles.row, styles.top, styles.commentHolder]}>
        <Image source={P1} style={styles.commentor} />
        <TextInput placeholderTextColor={colors.black} placeholder="Add a comment..." style={styles.commentInput} />
      </View>
    </React.Fragment>
  )
}

export default index

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  between: {
    justifyContent: 'space-between'
  },
  top: {
    marginTop: responsiveFontSize(13)
  },
  left: {
    marginLeft: responsiveFontSize(10)
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
  },
  stats: {
    fontFamily: SFProDisplayBold,
    fontSize: responsiveFontSize(15)
  },
  customBtn: {
    marginRight: responsiveFontSize(5)
  },
  title: {
    fontFamily: SFProDisplay,
    fontSize: responsiveFontSize(14)
  },
  created_at: {
    fontFamily: SFProDisplay,
    color: colors.secondaryGrey,
    fontSize: responsiveFontSize(11)
  },
  description: {
    fontFamily: SFProDisplay,
    marginTop: responsiveFontSize(4),
    color: colors.black,
    letterSpacing: 0.5,
    fontSize: responsiveFontSize(11)
  },
  commentor: {
    resizeMode: 'contain',
    height: responsiveFontSize(34),
    width: responsiveFontSize(34),
    marginRight: responsiveFontSize(10)
  },
  commentInput: {
    width: '80%',
    fontSize: responsiveFontSize(14),
    fontFamily: SFProDisplay,
  },
  commentHolder: {
    paddingHorizontal: responsiveFontSize(5),
  }
})
