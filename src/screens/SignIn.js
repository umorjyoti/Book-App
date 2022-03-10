import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import BookContext from '../context/BookStoreContext';
import AuthenticationDesign from '../components/AuthenticationDesign';
import AuthenticationHeadline from '../components/AuthenticationHeadline';
import AuthenticationInput from '../components/AuthenticationInput';
import AuthenticationButton from '../components/AuthenticationButton';
import AuthenticationBottomText from '../components/AuthenticationBottomText';
import constants from '../static/constants';
import {Logincheck} from '../utils';

const SignIn = ({navigation}) => {
  const {users, ApiSearch} = useContext(BookContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  return (
    <View style={styles.container}>
      <AuthenticationDesign />
      <AuthenticationHeadline
        title={constants.login}
        text={constants.loginText}
        error={errorText}
      />
      <View style={styles.subconatainer}>
        <AuthenticationInput
          name="envelope"
          text="username"
          pass={false}
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <AuthenticationInput
          name="lock"
          text="password"
          pass={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <AuthenticationButton
          onPress={() => {
            if (Logincheck(users, username, password)) {
              navigation.navigate('Home');
              return ApiSearch();
            } else {
              return setErrorText(constants.loginErrorText);
            }
          }}
          title={constants.login}
        />
      </View>
      <AuthenticationBottomText
        text={constants.loginBottomText}
        button={constants.signUp}
        onPress={() => navigation.navigate('SignUp')}
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

export default SignIn;
