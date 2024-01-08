import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import {Svg, SvgXml} from 'react-native-svg';
import {svgSetting} from '../constants/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Cards from '../components/Cards/Cards';
import LinearGradient from 'react-native-linear-gradient';

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
});

export default CreditCard;
