import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import Input from '../components/Input';
import MainBtn from '../components/mainBtn';
import SecondaryBtn from '../components/SecondaryBtn';

const SecRegister = () => {
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
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../Assets/logo.png')}
        alt="logo"
        style={styles.logo}
      />

      <View style={styles.form}>
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

        <View style={styles.indicatorCont}>
          <View style={styles.firstSec} />
          <View style={styles.middleSections} />
          <View style={styles.middleSections} />
          <View style={styles.lastSec} />
        </View>
      </View>

      <Text style={styles.text}>
        Use 8 or more characters with a mix of letters, numbers & symbols.
      </Text>

      <View style={styles.mainBtnContainer}>
        <MainBtn title="Get started, it’s free!" />
      </View>

      <View style={{alignItems: 'center', bottom: 20}}>
        <Text style={styles.secText}>If you don't have an account yet?</Text>
        <SecondaryBtn title="Sign Un" />
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
  passwordStrengthIndicator: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  indicatorCont: {
    flexDirection: 'row',
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
    bottom: 125,
  },
  mainBtnContainer: {
    bottom: 100,
  },
  secText: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.2,
    bottom: 10,
  },
});

export default SecRegister;
