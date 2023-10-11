import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Image } from 'react-native';

const BottomNav = () => {

  return (
    <View style={styles.navbar}>
      <View style={styles.navItemContainer}>
        <Image style={styles.navIcon} source={require('../assets/Discover.png')} />
        <Text style={styles.navItem}>Discover</Text>
      </View>
      <View style={styles.navItemContainer}>
        <Image style={styles.navIcon} source={require('../assets/ForYou.png')} />
        <Text style={styles.navItem}>For You</Text>
      </View>
      <View style={styles.navItemContainer}>
        <Image style={styles.navIcon} source={require('../assets/MyEvents.png')} />
        <Text style={StyleSheet.compose(styles.navItem, styles.selectedItem)}>My Events</Text>
      </View>
      <View style={styles.navItemContainer}>
        <Image style={styles.navIcon} source={require('../assets/Sell.png')} />
        <Text style={styles.navItem}>Sell</Text>
      </View>
      <View style={styles.navItemContainer}>
        <Image style={styles.navIcon} source={require('../assets/Account.png')} />
        <Text style={styles.navItem}>My Account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: responsiveHeight(10),
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 25,
    gap: 25,
  },
  navItem: {
    color: '#929292',
    fontSize: 10,
	  fontWeight: '400',
    fontFamily: 'Averta-Regular'
  },
  navIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
    objectFit: 'contain'
  },
  navItemContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  selectedItem: {
    color: '#026BDD',
  }
});

export default BottomNav;