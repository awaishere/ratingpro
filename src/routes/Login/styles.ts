import { responsiveFontSize } from "@src/library/viewHelper";
import Style from "@src/style";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    marginTop: Style.DEVICE_HEIGHT * 0.25
  },
  textContainer: {
    marginBottom: responsiveFontSize(15)
  }
})

export default styles
