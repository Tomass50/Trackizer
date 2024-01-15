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
import {svgAdd} from '../constants/constants';

type DropAreaProps = {
  cStyle?: StyleProp<ViewStyle>;
};

const DropArea: React.FC<DropAreaProps> = ({cStyle}) => {
  return (
    <TouchableOpacity style={[styles.container, cStyle]}>
      <View style={styles.secContainer}>
        <Text style={styles.text}>Add new card</Text>
        <View style={{alignItems: 'flex-end'}}>
          <SvgXml xml={svgAdd} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
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
