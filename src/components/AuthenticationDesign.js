import React from 'react';
import {View, StyleSheet} from 'react-native';
import constants from '../static/constants';
const AuthenticationDesign = () => {
  return (
    <View style={styles.logo}>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  circle1: {
    width: 150,
    height: 150,
    backgroundColor: constants.secondaryColor,
    position: 'absolute',
    top: -70,
    left: 280,
    borderRadius: 100,
    zIndex: 1,
  },
  circle2: {
    width: 100,
    height: 100,
    backgroundColor: constants.primaryColor,
    position: 'absolute',
    top: 20,
    left: 340,
    borderRadius: 100,
  },
});

export default AuthenticationDesign;
