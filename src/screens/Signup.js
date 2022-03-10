import React, {useContext, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import BookContext from '../context/BookStoreContext';
import AuthenticationDesign from '../components/AuthenticationDesign';
import AuthenticationHeadline from '../components/AuthenticationHeadline';
import AuthenticationInput from '../components/AuthenticationInput';
import AuthenticationButton from '../components/AuthenticationButton';
import AuthenticationBottomText from '../components/AuthenticationBottomText';
import constants from '../static/constants';
import {SignUpcheck} from '../utils';

const SignUp = ({navigation}) => {
  const {users, addUser} = useContext(BookContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  return (
    <View style={styles.container}>
      <AuthenticationDesign />
      <AuthenticationHeadline
        title={constants.signUpHeading}
        text={constants.signUpSubHeading}
        error={errorText}
      />
      <View style={styles.subconatainer}>
        <AuthenticationInput
          name="envelope"
          text={constants.username}
          pass={false}
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <AuthenticationInput
          name="lock"
          text={constants.password}
          pass={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <AuthenticationButton
          title={constants.signUp}
          onPress={() => {
            if (SignUpcheck(users, username, password)) {
              addUser({name: username, pass: password});
              Alert.alert(constants.signUpAlert);
              navigation.navigate('SignIn');
            } else {
              setErrorText(constants.signUpErrorText);
            }
          }}
        />
      </View>
      <AuthenticationBottomText
        text={constants.signUpBottomText}
        button={constants.signIn}
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'space-between',
    height: '40%',
    flex: 1,
  },
  subconatainer: {
    flex: 2,
    paddingHorizontal: 10,
  },
});

export default SignUp;
