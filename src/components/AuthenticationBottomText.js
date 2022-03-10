import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import constants from '../static/constants';

const AuthenticationBottomText = ({text, button, onPress}) => {
  return (
    <View style={styles.signUpButton}>
      <Text style={styles.SignUpText1}>{text} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.SignUpText}>{button}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpButton: {
    flex: 3,
    alignItems: 'flex-end',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  SignUpText1: {
    color: 'gray',
    fontSize: 16,
  },
  SignUpText: {
    fontSize: 16,
    color: constants.primaryColor,
    fontWeight: 'bold',
  },
});

export default AuthenticationBottomText;
