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
import SecRegister from './src/screens/SecRegister';
import Login from './src/screens/Login';
import Settings from './src/screens/Settings';
import SubsInfo from './src/screens/SubsInfo';

function App(): JSX.Element {
  return (
    <View style={styles.globalContainer}>
      {/* <Register /> */}
      {/* <SecRegister /> */}
      {/* <Login /> */}
      {/* <Settings /> */}
      <SubsInfo />
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
