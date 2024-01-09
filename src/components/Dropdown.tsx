import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {svgArrowSmall} from '../constants/constants';

type DropdownProps = {
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const Dropdown: React.FC<DropdownProps> = ({text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <SvgXml xml={svgArrowSmall} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 6,
    borderRadius: 16,
    borderWidth: 0.1,
    borderColor: '#FFF',
    borderStyle: 'solid',
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    color: '#FFF',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
  },
});

export default Dropdown;
