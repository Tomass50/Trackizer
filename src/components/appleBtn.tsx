import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';

const svgApple = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.4713 8.45029C12.4637 7.15482 13.0507 6.17848 14.236 5.45856C13.5731 4.50881 12.5701 3.98644 11.2481 3.88577C9.99628 3.78699 8.62673 4.61518 8.12526 4.61518C7.5953 4.61518 6.38341 3.91996 5.42986 3.91996C3.46197 3.95035 1.37061 5.48895 1.37061 8.61934C1.37061 9.54441 1.53966 10.4999 1.87777 11.4838C2.32986 12.7793 3.95964 15.9534 5.6597 15.9021C6.54867 15.8812 7.17741 15.2714 8.33421 15.2714C9.45682 15.2714 10.0381 15.9021 11.0296 15.9021C12.7449 15.8774 14.2189 12.992 14.6482 11.6928C12.3479 10.6081 12.4713 8.51677 12.4713 8.45029ZM10.475 2.65678C11.438 1.51328 11.3506 0.472348 11.3221 0.0981445C10.4712 0.147532 9.48721 0.677495 8.92686 1.32903C8.30951 2.02805 7.94671 2.89232 8.02459 3.86677C8.94395 3.93705 9.78353 3.46408 10.475 2.65678Z" fill="white"/>
  </svg>
`;

const AppleBtn = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <LinearGradient
        start={{x: 0, y: 110}}
        colors={[
          'rgba(255, 255, 255, 0.00) 43.25%',
          'rgba(0, 0, 0, 0.25) 100%',
          '#000',
        ]}
        style={styles.content}>
        <View style={styles.innerContent}>
          <SvgXml xml={svgApple} style={styles.icon} />
          <Text style={styles.textBtn}>Sign up with Apple</Text>
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
    color: '#fff',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
});

export default AppleBtn;
