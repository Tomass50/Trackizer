import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {FlatList} from 'react-native-gesture-handler';
import {
  svgOneDriveLarge,
  svgSpotLarge,
  svgYtPremium,
} from '../../constants/constants';

const data = [
  {key: 1, svg: svgSpotLarge, text: 'Spotify Premium '},
  {key: 2, svg: svgOneDriveLarge, text: 'One Drive'},
  {key: 3, svg: svgYtPremium, text: 'Youtube Premium'},
];

const CaruselItem = ({item}: any) => (
  <View style={styles.container}>
    <SvgXml xml={item.svg} />
    <Text style={styles.subText}>{item.text}</Text>
  </View>
);

const Carusel = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <CaruselItem item={item} />}
      keyExtractor={item => item.key.toString()}
      horizontal
      contentContainerStyle={styles.containerMain}
      snapToInterval={200}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{width: 16}} />}
    />
  );
};

const styles = StyleSheet.create({
  containerMain: {
    alignItems: 'center',
  },
  container: {
    width: 180,
    height: 200,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 100,
    gap: 24,
  },
  subText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 20,
    fontWeight: '600',
    marginTop: 8,
  },
});

export default Carusel;
