import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {svgArrowDown, svgSpotBig, svgTrash} from '../constants/constants';
import SectionList from '../components/SubInfo/SectionList';
import SecondaryBtn from '../components/SecondaryBtn';

const SubsInfo = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SafeAreaView />

      <View style={{alignItems: 'center'}}>
        <View style={styles.topContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity>
              <SvgXml xml={svgArrowDown} />
            </TouchableOpacity>
            <Text style={styles.header}>Subscription Info</Text>
            <TouchableOpacity>
              <SvgXml xml={svgTrash} />
            </TouchableOpacity>
          </View>

          <View style={styles.iconContainer}>
            <SvgXml xml={svgSpotBig} />
          </View>

          <View style={styles.namePriceContainer}>
            <Text style={styles.name}>Spotify</Text>
            <Text style={styles.price}>$5.99</Text>
          </View>
        </View>
      </View>

      <View style={{alignItems: 'center', top: -24.5}}>
        <View style={styles.bottomContainer}>
          <SectionList />

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.circle, {left: -5}]} />
      <View style={[styles.circle, {left: 339}]} />
      <View style={styles.lineContainer}>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
        <View style={[styles.dashedLine]}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E12',
  },
  topContainer: {
    width: 340,
    height: 360,
    backgroundColor: '#353542',
    marginVertical: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'center',
  },
  bottomContainer: {
    width: 340,
    height: 'auto',
    backgroundColor: '#282833',
    paddingTop: 32,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 28,
    justifyContent: 'space-between',
  },
  header: {
    color: '#A2A2B5',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  iconContainer: {
    width: 106,
    height: 106,
    backgroundColor: '#1ED760',
    borderRadius: 32,
    marginTop: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  namePriceContainer: {
    flexDirection: 'column',
    marginTop: 28,
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 48,
  },
  price: {
    textAlign: 'center',
    color: '#A2A2B5',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 32,
  },
  btnContainer: {
    marginVertical: 32,
    width: 288,
  },
  btn: {
    display: 'flex',
    width: 'auto',
    paddingHorizontal: 12,
    paddingVertical: 14,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
  },
  btnText: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
  circle: {
    width: 27,
    height: 27,
    borderRadius: 999,
    position: 'absolute',
    backgroundColor: '#0E0E12',
    top: 370,
  },
  lineContainer: {
    flexDirection: 'row',
    position: 'absolute',
    gap: 6,
  },
  dashedLine: {
    width: 15,
    height: 2,
    backgroundColor: '#0E0E12',
    top: 382.5,
    left: 15,
  },
});

export default SubsInfo;
