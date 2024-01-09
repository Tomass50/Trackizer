import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {svgArrowMed} from '../../constants/constants';

const SectionList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <View style={[styles.list, {gap: 145}]}>
          <Text style={styles.text}>Name</Text>
          <TouchableOpacity style={styles.inList}>
            <Text style={styles.secText}>Spotify</Text>
            <SvgXml xml={svgArrowMed} />
          </TouchableOpacity>
        </View>

        <View style={[styles.list, {gap: 88}]}>
          <Text style={styles.text}>Description</Text>
          <TouchableOpacity style={styles.inList}>
            <Text style={styles.secText}>Music app</Text>
            <SvgXml xml={svgArrowMed} />
          </TouchableOpacity>
        </View>

        <View style={[styles.list, {gap: 75}]}>
          <Text style={styles.text}>Category</Text>
          <TouchableOpacity style={styles.inList}>
            <Text style={styles.secText}>Enterteintment</Text>
            <SvgXml xml={svgArrowMed} />
          </TouchableOpacity>
        </View>

        <View style={[styles.list, {gap: 67}]}>
          <Text style={styles.text}>First Payment</Text>
          <TouchableOpacity style={styles.inList}>
            <Text style={styles.secText}>08.01.2022</Text>
            <SvgXml xml={svgArrowMed} />
          </TouchableOpacity>
        </View>

        <View style={[styles.list, {gap: 128}]}>
          <Text style={styles.text}>Reminder</Text>
          <TouchableOpacity style={styles.inList}>
            <Text style={styles.secText}>Never</Text>
            <SvgXml xml={svgArrowMed} />
          </TouchableOpacity>
        </View>

        <View style={[styles.list, {gap: 118}]}>
          <Text style={styles.text}>Currency</Text>
          <TouchableOpacity style={styles.inList}>
            <Text style={styles.secText}>USD ($)</Text>
            <SvgXml xml={svgArrowMed} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 288,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    borderRadius: 16,
    backgroundColor: 'rgba(78, 78, 97, 0.20)',
  },
  listContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
    alignSelf: 'stretch',
  },
  list: {
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  inList: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
  secText: {
    color: '#A2A2B5',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.2,
  },
});

export default SectionList;
