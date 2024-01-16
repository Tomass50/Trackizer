import React, {useState} from 'react';
import {ScrollView, SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Indicator from '../components/HomeComponents/indicator';
import Tab from '../components/HomeComponents/Tab';

const options = ['Your subscriptions', 'Upcoming bills'];

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('Your subscriptions');
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />

      <View style={styles.lightContainer}>
        <View style={styles.indicatorSubs}>
          <Indicator
            name="Active subs"
            count="12"
            containerStyle={{backgroundColor: '#FFA699'}}
          />
          <Indicator
            name="Highest subs"
            count="$19.99"
            containerStyle={{backgroundColor: '#AD7BFF'}}
          />
          <Indicator
            name="Lowest subs"
            count="$5.99"
            containerStyle={{backgroundColor: '#7DFFEE'}}
          />
        </View>
      </View>

      <View style={{marginTop: 22, alignItems: 'center'}}>
        <Tab
          options={options}
          selectedOption={selectedOption}
          onOptionPress={setSelectedOption}
        />
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
    height: 'auto',
    paddingVertical: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: 'rgba(53, 53, 66, 0.5)',
  },
  indicatorSubs: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 8,
  },
});

export default Home;
