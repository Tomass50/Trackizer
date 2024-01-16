import React, {useState} from 'react';
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
import CreditCard from './src/screens/CreditCard';
import Calendar from './src/screens/Calendar';
import SpendingBudgets from './src/screens/SpendingBudgets';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';

function App(): JSX.Element {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.globalContainer}>
        {isLoggedIn ? <AppStack /> : <AuthStack />}
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    backgroundColor: '#1C1C23',
  },
});

export default App;
