import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';

const svgGoogle = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3039 6.76926C14.3859 7.20859 14.4306 7.66792 14.4306 8.14726C14.4306 11.8966 11.9213 14.5626 8.13127 14.5626C7.26937 14.5629 6.41587 14.3933 5.61954 14.0636C4.8232 13.7339 4.09963 13.2505 3.49018 12.641C2.88073 12.0316 2.39733 11.308 2.06762 10.5117C1.73791 9.71532 1.56834 8.86182 1.5686 7.99992C1.56834 7.13803 1.73791 6.28453 2.06762 5.48819C2.39733 4.69185 2.88073 3.96828 3.49018 3.35883C4.09963 2.74938 4.8232 2.26599 5.61954 1.93627C6.41587 1.60656 7.26937 1.43699 8.13127 1.43726C9.90327 1.43726 11.3839 2.08926 12.5199 3.14792L10.6699 4.99792V4.99326C9.98127 4.33726 9.10727 4.00059 8.13127 4.00059C5.96594 4.00059 4.20594 5.82992 4.20594 7.99592C4.20594 10.1613 5.96594 11.9946 8.13127 11.9946C10.0959 11.9946 11.4333 10.8713 11.7079 9.32859H8.13127V6.76926H14.3046H14.3039Z" fill="black"/>
</svg>
`;

const GoogleBtn = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <LinearGradient
        start={{x: 0, y: 110}}
        colors={[
          'rgba(255, 255,255, 0.00) 43.25%',
          'rgba(255,255,255,0.50) 100%',
          '#FFF',
        ]}
        style={styles.content}>
        <View style={styles.innerContent}>
          <SvgXml xml={svgGoogle} style={styles.icon} />
          <Text style={styles.textBtn}>Sing up with Google</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 327,
    height: 48,
    borderRadius: 999,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBtn: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    color: '#000',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
});

export default GoogleBtn;
