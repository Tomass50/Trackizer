import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Calendar from '../screens/Calendar';
import Settings from '../screens/Settings';
import Home from '../screens/Home';
import SpendingBudgets from '../screens/SpendingBudgets';
import CreditCard from '../screens/CreditCard';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      sceneContainerStyle={{backgroundColor: '#1C1C23'}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Spending" component={SpendingBudgets} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Credit Cards" component={CreditCard} />
    </Tab.Navigator>
  );
};

export default AppTab;
