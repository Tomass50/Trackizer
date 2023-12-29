import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

type InputProps = {
  label: string;
  value: string;
  onChange: (text: string) => void;
};

const Input: React.FC<InputProps> = ({label, value, onChange}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={value}
          onChangeText={onChange}
          secureTextEntry={label === 'Password'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#666680',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.2,
  },
  inputContainer: {
    width: 326,
    gap: 4,
  },
  input: {
    height: 48,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#353542',
  },
});

export default Input;
