import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {svgMinus, svgPlus} from '../../constants/constants';

const Counter = () => {
  const [monthlyPrice, setMonthlyPrice] = useState(5.99);

  const decreasePrice = () => {
    if (monthlyPrice > 5.99) {
      setMonthlyPrice(prevPrice => prevPrice - 1.0);
    }
  };

  const increasePrice = () => {
    setMonthlyPrice(prevPrice => prevPrice + 1.0);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={decreasePrice}>
        <SvgXml xml={svgMinus} />
      </TouchableOpacity>
      <View style={styles.counterContainer}>
        <Text style={styles.title}>Monthly Price</Text>
        <Text style={styles.price}>${monthlyPrice.toFixed(2)}</Text>
        <View
          style={{width: 162, height: 1, backgroundColor: '#353542'}}></View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={increasePrice}>
        <SvgXml xml={svgPlus} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 52,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(78, 78, 97, 0.20)',
  },
  counterContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#83839C',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
  },
  price: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 36,
  },
});

export default Counter;
