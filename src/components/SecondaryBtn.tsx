import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

type SecondaryBtnProps = {
  title: string;
};

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.content}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 324,
    height: 48,
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    color: '#FFF',
  },
});

export default SecondaryBtn;
