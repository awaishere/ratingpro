import { Background } from '@src/assets/images'
import Style from '@src/style'
import React from 'react'
import { Image } from 'react-native'

function index() {
  return (
    <Image source={Background} style={{ position: 'absolute', height: Style.DEVICE_HEIGHT, width: Style.DEVICE_WIDTH }} />
  )
}

export default index
