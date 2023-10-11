import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { AntDesign } from '@expo/vector-icons';


const Navbar = ({ page = 0, closedPress = () => {} }) => {

  return (
    <View style={styles.navbar}>
      {page == 1 && 
        <TouchableWithoutFeedback onPress={() => closedPress()}>
          <AntDesign name="close" size={26} color="white" style={styles.icon}/>
        </TouchableWithoutFeedback>  
        }
      <Text style={styles.title}>{page == 0 ? "My Events" : "My Tickets"}</Text>
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
  icon: {
    position: 'absolute',
    left: 20,
    paddingTop: 50,
  },
});

export default Navbar;