import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import constants from '../static/constants';

const AuthenticationButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <View style={styles.loginSubconatiner}>
        <Text style={styles.loginButtonText}>{title}</Text>
        <Icon style={styles.icon1} name="arrow-right" size={25} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
    backgroundColor: constants.primaryColor,
  },
  loginSubconatiner: {
    flexDirection: 'row',
  },
  loginButtonText: {
    color: 'white',
    marginRight: 10,
    fontSize: 20,
  },
});

export default AuthenticationButton;
