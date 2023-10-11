import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Navbar = () => {

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>My Events</Text>
      <Text style={styles.help}>Help</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: responsiveHeight(10.8),
    backgroundColor: '#20262C',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Averta-Bold'
  },
  help: {
    color: '#FFFFFF',
    fontSize: 16,
    position: 'absolute',
    fontWeight: '600',
    right: 25,
    paddingTop: 50,
    fontFamily: 'Averta-Bold'
  },
});

export default Navbar;