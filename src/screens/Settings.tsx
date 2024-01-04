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

const Settings = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <SvgXml xml={svgBack} />
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
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: 24}}>
        <Text style={styles.title}>General</Text>
      </View>

      <View style={styles.setContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', gap: 20}}>
            <SvgXml xml={svgFaceId} />
            <Text style={styles.setText}>Security</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              left: 110,
              alignItems: 'center',
            }}>
            <Text>Face ID</Text>
            <SvgXml xml={svgArrowMed} />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <SvgXml xml={svgICloud} />
            <Text style={styles.setText}>iCloud Sync</Text>
          </View>
          <View style={{left: 115}}>
            <MySwitch />
          </View>
        </View>
      </View>

      <View style={{marginTop: 24}}>
        <Text style={styles.title}> My subscriptions</Text>
      </View>

      <View style={styles.setContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <SvgXml xml={svgSorting} />
            <Text style={styles.setText}>Sorting</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              left: 130,
            }}>
            <Text>Date</Text>
            <SvgXml xml={svgArrowMed} />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <SvgXml xml={svgChart} />
            <Text style={styles.setText}>Summary</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              left: 95,
            }}>
            <Text>Average</Text>
            <SvgXml xml={svgArrowMed} />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <SvgXml xml={svgMoney} />
            <Text style={styles.setText}>Default currency</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              left: 55,
            }}>
            <Text>USD ($)</Text>
            <SvgXml xml={svgArrowMed} />
          </View>
        </View>
      </View>

      <View style={{marginTop: 24}}>
        <Text style={styles.title}>Appearance</Text>
      </View>

      <View style={styles.setContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <SvgXml xml={svgAppIcon} />
            <Text style={styles.setText}>App Icon</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              left: 105,
            }}>
            <Text>Default</Text>
            <SvgXml xml={svgArrowMed} />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <SvgXml xml={svgTheme} />
            <Text style={styles.title}>Theme</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              left: 133,
            }}>
            <Text>Dark</Text>
            <SvgXml xml={svgArrowMed} />
          </View>
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
  editBtn: {
    width: 'auto',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
    borderRadius: 16,
    borderColor: '#FFF',
    borderWidth: 0.25,
    borderStyle: 'solid',
    backgroundColor: '#1C1C23',
  },
  editText: {
    color: '#FFF',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
  },
  title: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
  setContainer: {
    marginTop: 8,
    width: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 28,
    borderRadius: 16,
    backgroundColor: 'rgba(78, 78, 97, 0.20)',
  },
  setText: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
});

export default Settings;
