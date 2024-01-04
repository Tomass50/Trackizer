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
import NewSubs from './src/screens/NewSub';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.globalContainer}>
      {/* <Register /> */}
      {/* <SecRegister /> */}
      {/* <Login /> */}
      {/* <Settings /> */}
      {/* <SubsInfo /> */}
      <NewSubs />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    backgroundColor: '#1C1C23',
  },
});

export default App;
