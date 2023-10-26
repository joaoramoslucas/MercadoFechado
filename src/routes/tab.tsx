import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/home/home';
import Setting from '../Setting/Setting';

const Tab = createBottomTabNavigator();

export default function TabScreens() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Sacola" component={Setting} />
    </Tab.Navigator>
  );
}