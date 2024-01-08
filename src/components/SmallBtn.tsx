import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

type SmallBtnProps = {
  title: string;
};

const SmallBtn: React.FC<SmallBtnProps> = ({title}) => {
  return (
    <TouchableOpacity style={style.btnContainer}>
      <Text style={style.textBtn}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    width: 'auto',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
    borderRadius: 16,
    borderWidth: 0.5,
    borderTopColor: '#FFF',
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
  },
  textBtn: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
  },
});

export default SmallBtn;
