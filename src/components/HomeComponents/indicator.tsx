import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Indicator = () => {
  return (
    <View style={styles.container}>
      <View />
      <Text>Active Subs</Text>
      <Text>12</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 'auto',
    borderRadius: 16,
    backgroundColor: 'rgba(78, 78, 97, 0.20)',
    alignItems: 'center',
    borderTopColor: '#FFA699',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  line: {
    width: 46,
    height: 1,
    backgroundColor:''
  },
});

export default Indicator;
