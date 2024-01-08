import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Svg, SvgXml} from 'react-native-svg';
import {
  svgArrowMed,
  svgChart,
  svgMoney,
  svgSorting,
} from '../../constants/constants';

const MySubs = () => {
  return (
    <View style={styles.setContainer}>
      <View style={[styles.Container, {gap: 130}]}>
        <View style={styles.firstHalf}>
          <SvgXml xml={svgSorting} />
          <Text style={styles.whiteText}>Sorting</Text>
        </View>
        <TouchableOpacity style={styles.secondHalf}>
          <Text style={styles.grayText}>Date</Text>
          <SvgXml xml={svgArrowMed} />
        </TouchableOpacity>
      </View>

      <View style={[styles.Container, {gap: 95}]}>
        <View style={styles.firstHalf}>
          <SvgXml xml={svgChart} />
          <Text style={styles.whiteText}>Summary</Text>
        </View>
        <TouchableOpacity style={styles.secondHalf}>
          <Text style={styles.grayText}>Average</Text>
          <SvgXml xml={svgArrowMed} />
        </TouchableOpacity>
      </View>

      <View style={[styles.Container, {gap: 55}]}>
        <View style={styles.firstHalf}>
          <SvgXml xml={svgMoney} />
          <Text style={styles.whiteText}>Default currency</Text>
        </View>
        <TouchableOpacity style={styles.secondHalf}>
          <Text style={styles.grayText}>USD ($)</Text>
          <SvgXml xml={svgArrowMed} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstHalf: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  secondHalf: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
  },
  whiteText: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
  grayText: {
    color: '#A2A2B5',
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.2,
  },
});

export default MySubs;
