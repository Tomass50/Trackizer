import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {SvgXml} from 'react-native-svg';

type SubsItemsProps = {
  name: string;
  price: string;
  svgXml: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const SubsItems: React.FC<SubsItemsProps> = ({
  name,
  price,
  containerStyle,
  svgXml,
}) => {
  return (
    <View>
      <View style={styles.subContainer}>
        <View style={[styles.iconContainer, containerStyle]}>
          <SvgXml xml={svgXml} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.nameSub}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    width: 160,
    height: 168,
    borderRadius: 16,
    backgroundColor: 'rgba(78, 78, 97, 0.20)',
    marginBottom: 12,
    paddingLeft: 16,
    gap: 44,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    gap: 6,
  },
  nameSub: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
  price: {
    color: '#FFF',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 32,
  },
});

export default SubsItems;
