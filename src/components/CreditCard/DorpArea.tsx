import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {svgAdd} from '../../constants/constants';

const DropArea = () => {
  return (
    <TouchableOpacity style={style.container}>
      <View style={style.secContainer}>
        <Text style={style.text}>Add new card</Text>
        <View style={{alignItems: 'flex-end'}}>
          <SvgXml xml={svgAdd} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    paddingHorizontal: 104,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#4E4E61',
  },
  secContainer: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    color: '#A2A2B5',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
});

export default DropArea;
