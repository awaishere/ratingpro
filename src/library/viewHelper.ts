import { Platform, PixelRatio, Dimensions } from "react-native";
import Style from '@src/style'
import { RFValue } from "react-native-responsive-fontsize";
import { scale as sizeScale, verticalScale, moderateScale } from 'react-native-size-matters';

import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

const scale = Style.DEVICE_WIDTH / 320;

export function responsiveFontSize(size, SCALE = 0.05) {
  // const newSize = size * scale
  // return Platform.OS == 'ios' ? RFValue(size) : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  return Platform.OS == 'ios' ? RFValue(size) : moderateScale(size, SCALE)
}

export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  function onKeyboardDidShow(e: KeyboardEvent) { // Remove type here if not using TypeScript
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setKeyboardHeight(0);
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return keyboardHeight;
};

export function isIphoneWithNotch() {
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

export function tabBarHeight() {
  return isIphoneWithNotch() ?  80 : 60
}
