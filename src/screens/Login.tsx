import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Input from '../components/Input';
import MyCheck from '../components/CheckBox';
import MainBtn from '../components/mainBtn';
import SecondaryBtn from '../components/SecondaryBtn';

const Login = ({navigation}: any) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (text: string) => {
    setLogin(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register 1');
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />

      <View style={styles.logoContainer}>
        <Image
          source={require('../Assets/logo.png')}
          alt="logo"
          style={styles.logo}
        />
      </View>

      <View style={styles.formContainer}>
        <Input label="Login" value={login} onChange={handleLoginChange} />
        <Input
          label="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </View>

      <View style={styles.checkTextContainer}>
        <MyCheck title="Remember Me" />
        <Text style={styles.text}>Forgot Password </Text>
      </View>

      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 26}}>
        <MainBtn title="Sign In" />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.textWhite}>If you don't have an account yet?</Text>
        <SecondaryBtn title="Sing Un" onPress={handleRegisterPress} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 146,
    height: 24,
  },
  formContainer: {
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 36,
  },
  checkTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
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
  bottomContainer: {
    marginTop: 150,
    alignItems: 'center',
    gap: 20,
  },
});

export default Login;

// <View style={styles.checkText}>

// </View>

//   <View style={styles.contBtnText}>

//   </View>
// </View>
