import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Svg, SvgXml} from 'react-native-svg';
import {
  svgOneDriveSmall,
  svgSpotSmall,
  svgYtPremiumSmall,
} from '../../constants/constants';

const Subscriptions = () => {
  return (
    <View style={style.container}>
      <View style={[style.containerIcon, {backgroundColor: '#1ED760'}]}>
        <SvgXml xml={svgSpotSmall} />
      </View>
      <View style={[style.containerIcon, {backgroundColor: '#F00'}]}>
        <SvgXml xml={svgYtPremiumSmall} />
      </View>
      <View style={[style.containerIcon, {backgroundColor: '#ACDCF5'}]}>
        <SvgXml xml={svgOneDriveSmall} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  containerIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Subscriptions;
