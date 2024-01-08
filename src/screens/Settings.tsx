import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Svg, SvgXml} from 'react-native-svg';
import {
  svgAppIcon,
  svgArrowMed,
  svgBack,
  svgChart,
  svgFaceId,
  svgICloud,
  svgMoney,
  svgSorting,
  svgTheme,
} from '../constants/constants';
import MySwitch from '../components/Switch';
import General from '../components/Settings/General';
import MySubs from '../components/Settings/MySubs';
import Appearance from '../components/Settings/Apperance';
import SmallBtn from '../components/SmallBtn';

const Settings = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <SvgXml xml={svgBack} />
        </TouchableOpacity>
        <Text style={styles.textGrayLarge}>Settings</Text>
        <View style={{width: 24, height: 24}}></View>
      </View>

      <View style={styles.avatarContainer}>
        <Image
          source={require('../Assets/Person.jpg')}
          alt="person"
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>j.doe@gmail.com</Text>

        <View style={{marginTop: 16}}>
          <SmallBtn title="Edit profile" />
        </View>
      </View>

      <View style={{marginTop: 24}}>
        <Text style={styles.title}>General</Text>
      </View>

      <General />

      <View style={{marginTop: 24}}>
        <Text style={styles.title}> My subscriptions</Text>
      </View>

      <MySubs />

      <View style={{marginTop: 24}}>
        <Text style={styles.title}>Appearance</Text>
      </View>

      <View style={{marginBottom: 24}}>
        <Appearance />
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    justifyContent: 'space-between',
  },
  textGrayLarge: {
    color: '#A2A2B5',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  avatarContainer: {
    marginTop: 48,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 999,
  },
  name: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 32,
  },
  email: {
    color: '#A2A2B5',
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.2,
  },
  title: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
});

export default Settings;
