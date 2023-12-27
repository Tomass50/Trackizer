import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';

const svgFacebook = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_101_3610)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.04467C0 12.022 2.88867 15.3293 6.66667 16V10.222H4.66667V8H6.66667V6.222C6.66667 4.222 7.95533 3.11133 9.778 3.11133C10.3553 3.11133 10.978 3.2 11.5553 3.28867V5.33333H10.5333C9.55533 5.33333 9.33333 5.822 9.33333 6.44467V8H11.4667L11.1113 10.222H9.33333V16C13.1113 15.3293 16 12.0227 16 8.04467C16 3.62 12.4 0 8 0C3.6 0 0 3.62 0 8.04467Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_101_3610">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const FacebookBtn = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <LinearGradient
        start={{x: 0, y: 110}}
        colors={[
          'rgba(255, 255,255, 0.00) 43.25%',
          'rgba(23,113,230,0.50) 100%',
          '#1771E6',
        ]}
        style={styles.content}>
        <View style={styles.innerContent}>
          <SvgXml xml={svgFacebook} style={styles.icon} />
          <Text style={styles.textBtn}>Sing up with Facebook</Text>
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
    color: '#FFF',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
});

export default FacebookBtn;
