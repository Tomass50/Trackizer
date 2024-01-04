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
import {svgBack, svgMinus, svgPlus} from '../constants/constants';
import Carusel from '../components/NewSubs/Carusel';
import Input from '../components/Input';
import Counter from '../components/NewSubs/Counter';
import MainBtn from '../components/mainBtn';

const NewSubs = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />
      <View style={styles.lightContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <SvgXml xml={svgBack} />
          </TouchableOpacity>
          <Text style={styles.headerText}>New</Text>
          <View style={{width: 24, height: 24}}></View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add new</Text>
          <Text style={styles.title}>subscription</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Carusel />
        </ScrollView>
      </View>

      <View style={styles.description}>
        <Text style={styles.textDescription}>Description</Text>
        <Input />
      </View>

      <View>
        <Counter />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 54,
          marginBottom: 32,
        }}>
        <MainBtn title="Add this platform" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    backgroundColor: '#353542',
    paddingTop: 32,
    paddingBottom: 44,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  headerText: {
    textAlign: 'center',
    color: '#A2A2B5',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  titleContainer: {
    marginTop: 40,
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 40,
  },
  scrollContainer: {
    marginTop: 56,
  },
  description: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 24,
  },
  textDescription: {
    color: '#666680',
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.2,
  },
});

export default NewSubs;
