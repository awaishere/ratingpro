import React from 'react'
import { Image, Text, View } from 'react-native'
import Background from '@components/Background'
import { KeyboardAwareFlatList as FlatList } from 'react-native-keyboard-aware-scroll-view'
import GeneralStatusBarColor from '@src/components/GeneralStatusBar'
import styles from './styles'
import SearchBar from '@components/SearchBar'
import colors from '@src/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import { P1 } from '@src/assets/images'
import { responsiveFontSize } from '@src/library/viewHelper'
import { data } from './data'

const Header = () => {
  return (
    <View style={[styles.row, styles.headerContainer]}>
      <SearchBar
        color={colors.pureGrey}
        selectionColor={colors.pureGrey}
        placeholder={"Search"}
        textInputWrapper={styles.textContainer}
      />

      <Image source={P1} style={styles.p1Style} />
    </View>
  )
}

function index() {
  return (
    <React.Fragment>
      <GeneralStatusBarColor barStyle="dark-content" />
      <Background />

      <Header />

      <FlatList
        data={data}
        ListHeaderComponent={<Text style={styles.headerText}>Explore</Text>}
        ListHeaderComponentStyle={{ marginVertical: responsiveFontSize(20) }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={null}
        bounces={false}
        contentContainerStyle={styles.container}
        extraHeight={20}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
      </FlatList>
    </React.Fragment>
  )
}

export default index
