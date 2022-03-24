import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AuthenticationHeadline = ({title, text, error}) => {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingText1}>{title}</Text>
      <Text style={styles.headingText2}>{text}</Text>
      <Text style={styles.headingText3}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    flex: 2,
  },
  headingText1: {
    fontSize: 40,
    // fontWeight: 'bold',
    fontFamily: 'Fredoka-Medium',
    color: 'black',
  },
  headingText2: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
    marginBottom: 20,
  },
  headingText3: {
    fontSize: 13,
    fontWeight: '600',
    color: 'red',
    marginBottom: 20,
  },
});

export default AuthenticationHeadline;
