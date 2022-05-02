import colors from "@src/colors";
import { SFProDisplayMedium } from "@src/fonts";
import { responsiveFontSize } from "@src/library/viewHelper";
import Style from "@src/style";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    paddingTop: Style.DEVICE_HEIGHT * 0.05,
    marginTop: Style.DEVICE_HEIGHT * 0.20
  },
  textContainer: {
    marginTop: responsiveFontSize(15)
  },
  btnStyle: {
    backgroundColor: colors.orange,
    opacity: 0.5,
    marginTop: responsiveFontSize(20)
  },
  labelStyle: {
    color: colors.white,
  },
  googleLbl: {
    color: colors.pureGrey,
  },
  facebookBtn: {
    backgroundColor: colors.blue,
    marginTop: responsiveFontSize(20)
  },
  googleBtn: {
    backgroundColor: colors.white,
    marginTop: responsiveFontSize(20),
    borderColor: colors.lightGrey,
    borderWidth: responsiveFontSize(1)
  },
  icon: {
    position: 'absolute',
    left: '15%'
  },
  footer: {
    color: colors.black,
    fontFamily: SFProDisplayMedium,
    fontSize: responsiveFontSize(15),
    marginTop: responsiveFontSize(20),
    textAlign: 'center'
  }
})

export default styles
