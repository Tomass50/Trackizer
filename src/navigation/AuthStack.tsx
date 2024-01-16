import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import SecRegister from '../screens/SecRegister';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#1C1C23'},
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register 1" component={Register} />
      <Stack.Screen name="Register 2" component={SecRegister} />
    </Stack.Navigator>
  );
};

export default AuthStack;
