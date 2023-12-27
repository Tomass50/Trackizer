import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Register from './src/screens/Register';

function App(): JSX.Element {
  return (
    <View style={styles.globalContainer}>
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    backgroundColor: '#1C1C23',
  },
});

export default App;
