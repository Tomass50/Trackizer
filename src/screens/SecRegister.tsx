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
import MainBtn from '../components/mainBtn';
import SecondaryBtn from '../components/SecondaryBtn';

const SecRegister = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const getPasswordStrength = () => {
    if (password.length === 0) {
      return 'Weak';
    }

    let strength = 0;

    if (password.length >= 8) {
      strength += 1;
    }

    if (/[A-Z]/.test(password)) {
      strength += 1;
    }

    if (/\d/.test(password)) {
      strength += 1;
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength += 1;
    }

    return strength >= 4 ? 'Strong' : strength >= 2 ? 'Moderate' : 'Weak';
  };

  const getPasswordStrengthColor = () => {
    const strength = getPasswordStrength();

    switch (strength) {
      case 'Strong':
        return 'green';
      case 'Moderate':
        return 'orange';
      default:
        return 'red';
    }
  };

  const handleRegisterSecPress = () => {
    navigation.navigate('Register 2');
  };

  const renderIndicatorPart = () => {
    const color = getPasswordStrengthColor();

    return (
      <View
        style={{
          width: 79,
          height: 5,
          borderTopLeftRadius: 9,
          borderBottomLeftRadius: 9,
          backgroundColor: color,
        }}
      />
    );
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
        <Input
          label="Email address"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          label="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </View>

      <View style={styles.indicatorCont}>
        <View style={styles.firstSec} />
        <View style={styles.middleSections} />
        <View style={styles.middleSections} />
        <View style={styles.lastSec} />
      </View>

      <View style={{alignItems: 'center', marginTop: 16, gap: 40}}>
        <Text style={styles.text}>
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </Text>
        <MainBtn title="Get started, it’s free!" />
      </View>

      <View
        style={{
          alignItems: 'center',
          marginTop: 100,
          gap: 20,
          marginBottom: 30,
        }}>
        <Text style={styles.secText}>Do you have already an account?</Text>
        <SecondaryBtn title="Sign In" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 58,
  },
  logo: {
    width: 146,
    height: 24,
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 165,
    gap: 36,
  },
  passwordStrengthIndicator: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  indicatorCont: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  firstSec: {
    width: 79,
    height: 5,
    backgroundColor: '#353542',
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
  },
  middleSections: {width: 79, height: 5, backgroundColor: '#353542'},
  lastSec: {
    width: 79,
    height: 5,
    backgroundColor: '#353542',
    borderTopEndRadius: 9,
    borderBottomEndRadius: 9,
  },
  text: {
    color: '#666680',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.2,
  },
  secText: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.2,
  },
});

export default SecRegister;

// <View style={styles.mainBtnContainer}>
// </View>

// <View style={{alignItems: 'center', bottom: 20}}>

// </View>
