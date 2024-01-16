import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
} from 'react-native';
import AppleBtn from '../components/appleBtn';
import GoogleBtn from '../components/googleBtn';
import FacebookBtn from '../components/FacebookBtn';
import SecondaryBtn from '../components/SecondaryBtn';

const Register: React.FC = ({navigation}: any) => {
  const handleSecRegisterPress = () => {
    navigation.navigate('Register 2');
  };
  return (
    <SafeAreaView style={styles.container}>
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

      <View style={styles.secBtnContainer}>
        <SecondaryBtn
          title="Sign up with E-mail"
          onPress={handleSecRegisterPress}
        />

        <Text style={styles.caption}>
          By registering, you agree to our Terms of Use. Learn how we collect,
          use and share your data.
        </Text>
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
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 75,
    gap: 16,
  },
  secBtnContainer: {
    gap: 10,
    bottom: 25,
  },
  text: {
    bottom: 50,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    color: '#fff',
  },
  caption: {
    textAlign: 'center',
    color: '#666680',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.2,
  },
});
export default Register;
