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
import Post from '@components/Post'

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

function Main(props: any) {
  return (
    <React.Fragment>
      <GeneralStatusBarColor barStyle="dark-content" />
      <Background />

      <Header />

      <FlatList
        data={data}
        ListHeaderComponent={<Text style={styles.headerText}>Explore</Text>}
        ListHeaderComponentStyle={{
          marginVertical: responsiveFontSize(15),
          marginLeft: responsiveFontSize(10)
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <Post navigation={props.navigation} item={item} />}
        bounces={false}
        contentContainerStyle={styles.container}
        extraHeight={20}
        keyExtractor={_item => _item.key}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
      </FlatList>

      <View style={styles.footer} />
    </React.Fragment>
  )
}

export default Main
