import React from 'react';
import {ScrollView, SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Indicator from '../components/HomeComponents/indicator';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />

      <View style={styles.lightContainer}>
        <View style={{flexDirection: 'row', paddingHorizontal: 24}}>
          <Indicator />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    width: 360,
    height: 429,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: 'rgba(53, 53, 66, 0.5)',
  },
});

export default Home;
