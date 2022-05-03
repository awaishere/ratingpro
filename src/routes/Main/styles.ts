import colors from "@src/colors";
import { SFProDisplayBold } from "@src/fonts";
import { isIphoneWithNotch, responsiveFontSize } from "@src/library/viewHelper";
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
    width: '90%',
    marginBottom: responsiveFontSize(4),
    marginTop: responsiveFontSize(15)
  },
  textContainer: {
    width: '83%',
    backgroundColor: colors.white
  },
  p1Style: {
    resizeMode: 'contain',
    height: responsiveFontSize(42),
    width: responsiveFontSize(42),
  },
  headerText: {
    fontFamily: SFProDisplayBold,
    fontSize: responsiveFontSize(24)
  },
  separator: {
    height: responsiveFontSize(25)
  },
})

export default styles
