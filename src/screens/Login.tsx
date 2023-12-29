import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import Input from '../components/Input';
import MyCheck from '../components/CheckBox';
import MainBtn from '../components/mainBtn';
import SecondaryBtn from '../components/SecondaryBtn';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (text: string) => {
    setLogin(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../Assets/logo.png')}
        alt="logo"
        style={styles.logo}
      />

      <View style={styles.form}>
        <Input label="Login" value={login} onChange={handleLoginChange} />
        <Input
          label="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <View style={styles.checkText}>
          <MyCheck title="Remember Me" />
          <Text style={styles.text}>Forgot Password </Text>
        </View>

        <View>
          <MainBtn title="Sign In" />
        </View>

        <View style={styles.contBtnText}>
          <Text style={styles.textWhite}>
            If you don't have an account yet?
          </Text>
          <SecondaryBtn title="Sing Un" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 146,
    height: 24,
    marginTop: 58,
    paddingRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 11,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    gap: 25,
    top: 100,
  },
  checkText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 75,
  },
  text: {
    color: '#666680',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  textWhite: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  contBtnText: {
    alignItems: 'center',
    bottom: -85,
    gap: 8,
  },
});

export default Login;
