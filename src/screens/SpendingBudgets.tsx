import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Ellipse, Svg, SvgXml, Path, Circle} from 'react-native-svg';
import {
  svgAuto,
  svgConfetti,
  svgEllipse,
  svgFinger,
  svgLike,
  svgSetting,
} from '../constants/constants';
import InfoContainer from '../components/SpendingBudgets/InfoConatiner';
import {
  VictoryBar,
  VictoryChart,
  VictoryPolarAxis,
  VictoryTheme,
} from 'victory-native';
import ProgressToSpend from '../components/SpendingBudgets/ProgressToSpend';
import DropArea from '../components/DorpArea';

const SpendingBudgets = () => {
  const radius = 95; // Увеличенный радиус полукруга
  const centerX = 100; // X-координата центра полукруга
  const centerY = 100; // Y-координата центра полукруга
  const startAngle = 0; // Начальный угол
  const endAngle = 180;

  const toRadians = (angle: number) => (angle * Math.PI) / 180;

  const startX = centerX + radius * Math.cos(toRadians(startAngle));
  const startY = centerY + radius * Math.sin(toRadians(startAngle));
  const endX = centerX + radius * Math.cos(toRadians(endAngle));
  const endY = centerY + radius * Math.sin(toRadians(endAngle));
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView />

      <View style={styles.topContainer}>
        <View style={{width: 24, height: 24}}></View>
        <Text style={styles.topText}>Spending & Budgets</Text>
        <TouchableOpacity>
          <SvgXml xml={svgSetting} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: 'center',
          marginTop: 44,
        }}>
        <Svg height="200" width="200">
          <Path
            d={`M${startX} ${startY} A${radius} ${radius} 0 1 0 ${endX} ${endY}`}
            stroke="#4E4E61" // Цвет обводки полукруга
            strokeWidth="7" // Ширина обводки
            fill="none" // Отключаем заливку
            strokeLinecap="round"
          />
        </Svg>
      </View>

      <View style={{top: -30}}>
        <InfoContainer text="Your budgets are on track" />
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}>
        <ProgressToSpend
          svgXml={svgAuto}
          title="Auto & Transport"
          left="$150"
          forPrice="$50.00"
          toPrice="$200"
          containerStyle={{backgroundColor: '#00FAD9'}}
        />
        <ProgressToSpend
          svgXml={svgConfetti}
          title="Entertainment"
          left="$400"
          forPrice="$250.00"
          toPrice="$600"
          containerStyle={{backgroundColor: '#FFA699', width: '45%'}}
        />
        <ProgressToSpend
          svgXml={svgFinger}
          title="Entertainment"
          left="$25"
          forPrice="$55.00"
          toPrice="$100"
          containerStyle={{backgroundColor: '#AD7BFF', width: 10}}
        />
      </View>

      <View
        style={{
          marginVertical: 24,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <DropArea cStyle={{paddingHorizontal: 89, height: 84}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  topContainer: {
    flexDirection: 'row',
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topText: {
    color: '#A2A2B5',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.2,
  },
});

export default SpendingBudgets;
