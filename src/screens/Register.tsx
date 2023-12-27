import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import AppleBtn from '../components/appleBtn';
import GoogleBtn from '../components/googleBtn';
import FacebookBtn from '../components/FacebookBtn';

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/logo.png')}
        alt="logo"
        style={styles.logo}
      />

      <View style={styles.btnContainer}>
        <AppleBtn />
        <GoogleBtn />
        <FacebookBtn />
      </View>

      <Text style={styles.text}>or</Text>
    </View>
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
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  text: {
    bottom: 150,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    color: '#fff',
  },
});
export default Register;
