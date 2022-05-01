import { Dimensions } from "react-native"

const x = Dimensions.get("window").width
const y = Dimensions.get("window").height

const Style = {
  
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
}

export default Style