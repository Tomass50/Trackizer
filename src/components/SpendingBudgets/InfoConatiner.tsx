import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {svgLike} from '../../constants/constants';

type InfoContainerProps = {
  text: string;
};

const InfoContainer: React.FC<InfoContainerProps> = ({text}) => {
  return (
    <View style={style.infoContainer}>
      <Text style={style.text}>{text}</Text>
      <SvgXml xml={svgLike} />
    </View>
  );
};

const style = StyleSheet.create({
  infoContainer: {
    width: 'auto',
    height: 'auto',
    paddingVertical: 20,
    paddingHorizontal: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderColor: '#4E4E61',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
});

export default InfoContainer;
