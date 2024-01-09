import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import {svgCircle} from '../../constants/constants';

const data = [
  {key: 1, number: '08', text: 'Mo'},
  {key: 2, number: '09', text: 'Tu'},
  {key: 3, number: '10', text: 'We'},
  {key: 4, number: '11', text: 'Th'},
  {key: 5, number: '12', text: 'Fr'},
  {key: 6, number: '13', text: 'Sa'},
  {key: 7, number: '14', text: 'Su'},
  {key: 8, number: '15', text: 'Mo'},
  {key: 9, number: '16', text: 'Tu'},
];

const isToday = ({number}: any) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const currentDateString = `${currentYear}-${
    currentMonth < 10 ? '0' : ''
  }${currentMonth}-${currentDay < 10 ? '0' : ''}${currentDay}`;

  return currentDateString === `2024-01-${number}`;
};

const JanuaryItem = ({item}: any) => (
  <TouchableOpacity
    style={[styles.container, isToday(item) && styles.todayContainer]}>
    <Text style={styles.whiteText}>{item.number}</Text>
    <Text style={styles.grayText}>{item.text}</Text>
    {isToday(item) && (
      <View style={{marginTop: 27, marginBottom: 16}}>
        <SvgXml xml={svgCircle} />
      </View>
    )}
  </TouchableOpacity>
);

const January = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <JanuaryItem item={item} />}
      keyExtractor={item => item.key.toString()}
      horizontal
      contentContainerStyle={{gap: 8}}
      snapToInterval={200}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 103,
    borderRadius: 16,
    borderWidth: 0.3,
    borderStyle: 'solid',
    borderColor: '#CFCFFC',
    backgroundColor: 'rgba(78, 78, 97, 0.20)',
    flexDirection: 'column',
    alignItems: 'center',
  },
  todayContainer: {
    backgroundColor: '#4E4E61',
  },
  whiteText: {
    color: '#FFF',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 32,
  },
  grayText: {
    color: '#A2A2B5',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.2,
  },
});

export default January;
