import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type MainBtnProps = {
  title: string;
};

const MainBtn: React.FC<MainBtnProps> = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <LinearGradient
        start={{x: 0, y: 110}}
        colors={[
          'rgba(255, 255, 255, 0.00) 43.25%',
          'rgba(255, 127, 55, 0.50) 100%',
          '#FF7966',
        ]}
        style={styles.content}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 324,
    height: 48,
    borderRadius: 999,
    overflow: 'hidden',
    shadowColor: 'rgba(255, 121, 102, 0.50)',
    elevation: 5,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
});

export default MainBtn;
