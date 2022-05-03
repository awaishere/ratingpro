import colors from "@src/colors";
import { SFProDisplayBold, SFProDisplayMedium } from "@src/fonts";
import { responsiveFontSize } from "@src/library/viewHelper";
import Style from "@src/style";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    alignSelf: 'center',
    width: '90%',
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
    height: responsiveFontSize(10)
  }
})

export default styles
