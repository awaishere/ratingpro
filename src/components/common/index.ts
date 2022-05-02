import { Platform, Dimensions } from 'react-native';

function isIphoneWithNotch() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

let ViewHelper = () => {
  return Platform.select({
    ios: isIphoneWithNotch() ? 40 : 20,
    android: 20,
    default: 0
  })

}
export {
  ViewHelper
}
