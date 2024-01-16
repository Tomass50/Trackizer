import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

type TabProps = {
  options: string[];
  selectedOption: string;
  onOptionPress?: (option: string) => void;
};

const Tab: React.FC<TabProps> = ({options, selectedOption, onOptionPress}) => {
  const {width: windowWidth} = useWindowDimensions();

  const segmentedControlWidth = windowWidth - 24;

  const internalPadding = 20;

  const itemWidth = (segmentedControlWidth - internalPadding) / options.length;

  const rStyle = useAnimatedStyle(() => {
    return {
      left: withTiming(
        itemWidth * options.indexOf(selectedOption) + internalPadding / 2,
      ),
    };
  }, [selectedOption, options, itemWidth]);
  return (
    <View
      style={[
        styles.container,
        {width: segmentedControlWidth, paddingLeft: internalPadding / 2},
      ]}>
      <Animated.View
        style={[
          {
            width: itemWidth,
          },
          rStyle,
          styles.activeBox,
        ]}
      />
      {options.map(option => {
        return (
          <TouchableOpacity
            onPress={() => {
              onOptionPress?.(option);
            }}
            key={option}
            style={[
              {
                width: itemWidth,
              },
              styles.labelContainer,
            ]}>
            <Text style={styles.label}>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#0E0E12',
    borderRadius: 16,
  },
  activeBox: {
    position: 'absolute',
    height: '80%',
    top: '10%',
    borderRadius: 16,
    backgroundColor: 'rgba(78, 78, 97, 0.20)',
  },
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
});

export default Tab;
