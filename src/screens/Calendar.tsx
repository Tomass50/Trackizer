import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {
  svgOneDriveMed,
  svgSetting,
  svgSpotMed,
  svgYtPremiumMed,
} from '../constants/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Dropdown from '../components/Dropdown';
import January from '../components/Calendar/January';
import BillInfo from '../components/Calendar/BillInfo';
import SubsItems from '../components/Calendar/SubsItems';
import SubsInfo from './SubsInfo';

const Calendar = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />

      <View style={styles.lightContainer}>
        <View style={styles.topContainer}>
          <View style={{width: 24, height: 24}}></View>
          <Text style={styles.topText}>Calendar</Text>
          <TouchableOpacity>
            <SvgXml xml={svgSetting} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Subs</Text>
          <Text style={styles.headerText}>Schedule</Text>
        </View>

        <View style={styles.subsInfoContainer}>
          <Text style={styles.subsInfoText}> 3 subs for today</Text>
          <Dropdown text="January" />
        </View>

        <View style={styles.calendarContainer}>
          <January />
        </View>
      </View>

      <BillInfo price="$24.99" />

      <View style={[styles.subsContainer, {marginTop: 24}]}>
        <SubsItems
          containerStyle={{
            backgroundColor: '#1ED760',
          }}
          name="Spotify"
          price="$5.99"
          svgXml={svgSpotMed}
        />
        <SubsItems
          containerStyle={{
            backgroundColor: '#F00',
          }}
          name="YouTube Premium"
          price="$18.99"
          svgXml={svgYtPremiumMed}
        />
      </View>

      <View style={[styles.subsContainer]}>
        <SubsItems
          containerStyle={{backgroundColor: '#ACDCF5'}}
          name="One Drive"
          price="$9.99"
          svgXml={svgOneDriveMed}
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
    width: 375,
    height: 400,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: 'rgba(162, 162, 181, 0.17)',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  topText: {
    color: '#A2A2B5',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  headerContainer: {
    flexDirection: 'column',
    marginTop: 44,
    paddingLeft: 24,
  },
  headerText: {
    color: '#FFF',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 40,
  },
  subsInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    paddingHorizontal: 28,
    justifyContent: 'space-between',
  },
  subsInfoText: {
    color: '#A2A2B5',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
  calendarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    gap: 8,
    paddingHorizontal: 24,
  },
  subsContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    gap: 8,
  },
});

export default Calendar;
