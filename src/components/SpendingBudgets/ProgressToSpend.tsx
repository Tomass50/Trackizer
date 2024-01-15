import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type ProgressToSpendProps = {
  svgXml: string;
  title: string;
  left: string;
  forPrice: string;
  toPrice: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const ProgressToSpend: React.FC<ProgressToSpendProps> = ({
  svgXml,
  title,
  left,
  forPrice,
  toPrice,
  containerStyle,
}) => {
  const [dynamicLeft, setDynamicLeft] = useState(left);
  const [dynamicForPrice, setDynamicForPrice] = useState(forPrice);
  const [dynamicToPrice, setDynamicToPrice] = useState(toPrice);
  const progress = useSharedValue(0);

  useEffect(() => {
    // Используйте setDynamicLeft, setDynamicForPrice, setDynamicToPrice
    // чтобы обновить значения в зависимости от ваших логик и данных
    setDynamicLeft(left);
    setDynamicForPrice(forPrice);
    setDynamicToPrice(toPrice);

    progress.value = withTiming(
      // Используйте динамические значения при расчете прогресса
      parseFloat(forPrice.replace('$', '')) /
        parseFloat(toPrice.replace('$', '')),
      {duration: 1000, easing: Easing.inOut(Easing.ease)},
    );
  }, [left, forPrice, toPrice]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 20}}>
        <SvgXml xml={svgXml} />

        <View style={{flexDirection: 'column'}}>
          <Text style={styles.whiteText}>{title}</Text>
          <Text style={styles.grayText}>{left} left to spend</Text>
        </View>

        <View style={{flexDirection: 'column', left: 50}}>
          <Text style={styles.whiteText}>{forPrice}</Text>
          <Text style={styles.grayText}>of {toPrice}</Text>
        </View>
      </View>

      <View
        style={{
          width: 270,
          height: 3,
          borderRadius: 9,
          backgroundColor: '#4E4E61',
          marginTop: 16,
        }}>
        <Animated.View
          style={[styles.progress, containerStyle, animatedStyle]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    borderRadius: 16,
    borderColor: '#CFCFFC',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'rgba(78, 78, 97, 0.20)',
    paddingTop: 20,
    paddingBottom: 12,
    paddingLeft: 20,
    alignContent: 'center',
  },
  progress: {
    position: 'absolute',
    height: 3,
    borderRadius: 9,
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
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.2,
  },
});

export default ProgressToSpend;
