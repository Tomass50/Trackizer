import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type BillInfoProps = {
  price: string;
};

const BillInfo: React.FC<BillInfoProps> = ({price}) => {
  const currentDate = new Date();

  const addLeadingZero = (number: number): string => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  const month = addLeadingZero(currentDate.getMonth() + 1);
  const date = addLeadingZero(currentDate.getDate());
  const year = currentDate.getFullYear();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const formattedMonth = monthNames[currentDate.getMonth()];

  const formattedDate = `${month}.${date}.${year}`;

  return (
    <View style={styles.billInfoContainer}>
      <View style={styles.container}>
        <Text style={styles.month}>{formattedMonth}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>

      <View style={styles.container}>
        <Text style={[styles.price, {left: 35}]}>{price}</Text>
        <Text style={styles.text}>in upcoming bills</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  billInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingHorizontal: 24,
  },
  container: {
    flexDirection: 'column',
  },
  month: {
    color: '#FFF',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 32,
  },
  date: {
    color: '#A2A2B5',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.2,
  },
  price: {
    color: '#FFF',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 32,
  },
  text: {
    color: '#A2A2B5',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.2,
  },
});

export default BillInfo;
