import colors from "@src/colors";
import { SFProDisplay, SFProDisplayBold } from "@src/fonts";
import { isIphoneWithNotch, responsiveFontSize } from "@src/library/viewHelper";
import Style from "@src/style";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '93%',
  },
  footer: {
    height: responsiveFontSize(isIphoneWithNotch() ? 25 : 8),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    alignSelf: 'center',
    width: '87%',
    marginBottom: responsiveFontSize(4),
    marginTop: Style.DEVICE_HEIGHT * 0.03
  },
  image: {
    resizeMode: 'contain',
    height: responsiveFontSize(23),
    width: responsiveFontSize(23)
  },
  textContainer: {
    width: '83%',
    backgroundColor: colors.white
  },
  p2Style: {
    resizeMode: 'contain',
    height: responsiveFontSize(100),
    width: responsiveFontSize(100),
  },
  header: {
    fontFamily: SFProDisplayBold,
    color: colors.black,
    marginTop: responsiveFontSize(30),
    fontSize: responsiveFontSize(24)
  },
  username: {
    fontFamily: SFProDisplay,
    color: colors.black,
    marginTop: responsiveFontSize(10),
    fontSize: responsiveFontSize(16)
  },
  stats: {
    marginTop: responsiveFontSize(7),
    width: '70%',
    alignSelf: 'center'
  },
  commonText: {
    fontFamily: SFProDisplayBold,
    color: colors.black,
    marginTop: responsiveFontSize(10),
    fontSize: responsiveFontSize(18)
  },
  itemImage: {
    resizeMode: 'cover',
    borderRadius: responsiveFontSize(4),
    flex: 1,
    marginHorizontal: responsiveFontSize(4),
    height: responsiveFontSize(120)
  },
  separator: {
    height: responsiveFontSize(10),
  }
})

export default styles
