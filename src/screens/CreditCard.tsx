import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import {Svg, SvgXml} from 'react-native-svg';
import {svgSetting} from '../constants/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Cards from '../components/CreditCard/Cards';
import Subscriptions from '../components/CreditCard/Subscriptions';
import DropArea from '../components/CreditCard/DorpArea';

const CreditCard = () => {
  return (
    <ScrollView>
      <SafeAreaView />

      <View style={styles.headerContainer}>
        <View style={{width: 24, height: 24}} />
        <Text style={styles.headerText}>Credit Cards</Text>
        <TouchableOpacity>
          <SvgXml xml={svgSetting} />
        </TouchableOpacity>
      </View>

      <Cards />

      <View style={styles.subContainer}>
        <Text style={styles.subscriptions}>Subscriptions</Text>
        <Subscriptions />
      </View>

      <View style={styles.bottomContainer}>
        <View style={{width: 328, marginTop: 24}}>
          <DropArea />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  headerContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#A2A2B5',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  cardContainer: {
    alignItems: 'center',
    marginTop: 44,
  },
  subContainer: {
    alignItems: 'center',
    marginTop: 22,
    gap: 16,
  },
  subscriptions: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
  },
  bottomContainer: {
    width: 375,
    height: 185,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    opacity: 0.5,
    backgroundColor: '#353542',
    marginTop: 48,
    alignItems: 'center',
  },
});

export default CreditCard;
