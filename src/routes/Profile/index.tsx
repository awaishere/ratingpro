import React from 'react'
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Background from '@components/Background'
import GeneralStatusBarColor from '@src/components/GeneralStatusBar'
import styles from './styles'
import { Logout, P2, Settings } from '@src/assets/images'
import { data } from './data'
import { responsiveFontSize } from '@src/library/viewHelper'
import { SFProDisplay } from '@src/fonts'

const Header = () => {
  return (
    <View style={[styles.row, styles.headerContainer]}>
      <TouchableOpacity>
        <Image source={Settings} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={Logout} style={styles.image} />
      </TouchableOpacity>
    </View>
  )
}

const ListHeader = () => {
  return (
    <React.Fragment>
      <Image source={P2} style={styles.p2Style} />

      <Text style={styles.header}>Umar Farooq</Text>
      <Text style={styles.username}>@mirza_umr</Text>

      <View style={[styles.row, styles.stats]}>
        <Text style={styles.commonText}>144 <Text style={{ fontFamily: SFProDisplay }}>Posts</Text></Text>

        <Text style={styles.commonText}>256 <Text style={{ fontFamily: SFProDisplay }}>Likes</Text></Text>
      </View>
    </React.Fragment>
  )
}

function Profile(props: any) {
  return (
    <React.Fragment>
      <GeneralStatusBarColor barStyle="dark-content" />
      <Background />

      <Header />

      <FlatList
        data={data}
        bounces={false}
        keyExtractor={_item => _item.key}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeader}
        ListHeaderComponentStyle={{
          marginTop: responsiveFontSize(25),
          marginBottom: responsiveFontSize(20),
          alignItems: 'center'
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => <Image source={item.image} style={styles.itemImage} />}
      />

      <View style={styles.footer} />
    </React.Fragment>
  )
}

export default Profile
