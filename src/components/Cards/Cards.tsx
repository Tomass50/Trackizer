import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import {svgChip, svgMasterCard} from '../../constants/constants';

const Cards = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 3}}
        end={{x: 0, y: 0}}
        colors={[
          'rgba(28, 28, 35, 0.00) 0%',
          'rgba(28, 28, 35, 0.75) 100%',
          'rgba(78, 78, 97, 0.35)',
        ]}
        style={[
          styles.card,
          {
            transform: [{rotateZ: '8deg'}],
            position: 'absolute',
            right: 33,
            top: 13,
          },
        ]}
      />
      <LinearGradient
        start={{x: 0, y: 3}}
        end={{x: 0, y: 0}}
        colors={[
          'rgba(28, 28, 35, 0.00) 0%',
          'rgba(28, 28, 35, 0.75) 100%',
          'rgba(78, 78, 97, 0.75)',
        ]}
        style={[
          styles.card,
          {
            transform: [{rotateZ: '4deg'}],
            position: 'absolute',
            right: 45,
            top: 6.5,
          },
        ]}
      />
      <View style={[styles.card, {backgroundColor: '#252530'}]}>
        <View style={[styles.firstCircle, {top: -70, left: 90}]} />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0}}
          colors={[
            'rgba(255, 255, 255, 0.10) 15.96%',
            'rgba(255, 255, 255, 0.00) 51.85%)',
          ]}
          style={[styles.secondCircle, {top: 130, left: -50}]}
        />

        <View style={styles.logoTextCont}>
          <SvgXml xml={svgMasterCard} />
          <Text style={styles.VirtualCard}>Virtual Card</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>John Doe</Text>
          <View style={styles.passCont}>
            <Text style={styles.password}>****</Text>
            <Text style={styles.password}>****</Text>
            <Text style={styles.password}>****</Text>
            <Text style={styles.password}>2197</Text>
          </View>
          <Text style={styles.date}>08/28</Text>
        </View>

        <View style={styles.chipContainer}>
          <SvgXml xml={svgChip} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 44,
    marginBottom: 24,
  },
  card: {
    width: 232,
    height: 349,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
  },
  logoTextCont: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 16,
    marginTop: 32,
  },
  VirtualCard: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
  firstCircle: {
    width: 260,
    height: 260,
    borderRadius: 260,
    opacity: 0.5,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    position: 'absolute',
  },
  secondCircle: {
    width: 379,
    height: 379,
    borderRadius: 379,
    opacity: 0.5,
    position: 'absolute',
  },
  infoContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 8,
    marginTop: 92,
  },
  passCont: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  password: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
  },
  name: {
    color: '#C1C1CD',
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
  },
  date: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
  chipContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
});

export default Cards;
