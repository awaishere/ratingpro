import colors from '@src/colors'
import { SFProDisplay, SFProDisplayBold, SFProDisplayMedium } from '@src/fonts'
import CustomIcon from '@src/library/CustomIcon'
import { responsiveFontSize } from '@src/library/viewHelper'
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Disclaimer, P1 } from '@src/assets/images'
import Comment from '@components/Comment'

function index({ item, navigation }: any) {
  return (
    <React.Fragment>
      <View style={[styles.row, styles.between]}>
        <TouchableOpacity onPress={() => navigation.navigate('profile')} style={[styles.row, styles.p1]}>
          <Image source={item.editor.pic} style={styles.headerImage} />

          <Text style={styles.headerText}>{item.editor.name}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon color={colors.black} name={"dots-vertical"} style={styles.customBtn} size={responsiveFontSize(20)} />
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
              <CustomIcon name={"comment"} color={colors.black} style={styles.customBtn} size={responsiveFontSize(20)} />
            </TouchableOpacity>
            <Text style={styles.stats}>{item.comments.length}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity>
            <CustomIcon name={"dislike"} color={colors.black} style={styles.customBtn} size={responsiveFontSize(20)} />
          </TouchableOpacity>
          <Text style={styles.stats}>{item.dislikes}</Text>

          {item.reportable &&
            <TouchableOpacity style={styles.left}>
              <Image source={Disclaimer} style={styles.disclaimer} />
            </TouchableOpacity>
          }
        </View>
      </View>

      <View style={[styles.row, styles.between, styles.top]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.created_at}>{item.created_at}</Text>
      </View>

      <Text style={styles.description}>{item.description}</Text>

      {item.comments.length > 1 && <TouchableOpacity style={styles.allComments}><Text style={styles.all}>{`View all ${item.comments.length - 1} comments`}</Text></TouchableOpacity>}

      {item.comments.length > 0 && <Comment item={item.comments[0]} />}

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
    color: colors.black,
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
    color: colors.black,
    fontSize: responsiveFontSize(15)
  },
  customBtn: {
    marginRight: responsiveFontSize(5)
  },
  title: {
    fontFamily: SFProDisplay,
    color: colors.black,
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
    color: colors.black,
    fontSize: responsiveFontSize(14),
    fontFamily: SFProDisplay,
  },
  commentHolder: {
    paddingHorizontal: responsiveFontSize(5),
  },
  disclaimer: {
    resizeMode: 'contain',
    height: responsiveFontSize(20),
    width: responsiveFontSize(20)
  },
  all: {
    fontFamily: SFProDisplayMedium,
    color: colors.black,
    fontSize: responsiveFontSize(11),
    letterSpacing: 1,
  },
  allComments: {
    marginTop: responsiveFontSize(10)
  }
})
