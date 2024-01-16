import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';

type IndicatorProps = {
  name: string;
  count: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const Indicator: React.FC<IndicatorProps> = ({name, count, containerStyle}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.line, containerStyle]} />
      <Text style={styles.indName}>{name}</Text>
      <Text style={styles.number}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    borderRadius: 16,
    backgroundColor: 'rgba(78, 78, 97, 0.20)',
    alignItems: 'center',
    borderTopColor: '#FFA699',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  line: {
    width: 46,
    height: 1,
    top: -16,
  },
  indName: {
    color: '#83839C',
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
  },
  number: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
});

export default Indicator;
