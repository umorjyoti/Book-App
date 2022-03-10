import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AuthenticationInput = ({name, text, pass, value, onChangeText}) => {
  return (
    <View style={styles.input1}>
      <Icon style={styles.icon1} name={name} size={25} color="black" />
      <View style={styles.inputVariables}>
        <Text style={styles.inputLabel}>{text}</Text>
        <TextInput
          secureTextEntry={pass}
          placeholderTextColor={'gray'}
          style={styles.inputBox}
          placeholder={text}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input1: {
    borderRadius: 10,
    marginBottom: 20,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    shadowColor: 'gray',
    backgroundColor: 'white',
    elevation: 10,
  },
  inputVariables: {
    paddingTop: 12,
    marginLeft: 20,
    alignItems: 'center',
  },
  inputLabel: {
    color: 'black',
  },
  inputBox: {
    color: 'black',
    // height: 20,
  },
});

export default AuthenticationInput;
