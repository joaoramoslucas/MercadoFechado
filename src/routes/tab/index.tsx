import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Casa from '../../assets/icons/casa.svg'
import { StackHome } from '../stack/StackHome';
import Sacola from '../../assets/icons/sacola.svg';
import { StackSacola } from '../stack/StackSacola';


const Tab = createBottomTabNavigator();

type TabScreensProps = {};

export const TabScreens: React.FC<TabScreensProps> = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let Icon: React.FC<{ color: string }> = Casa;
          if (route.name === 'Sacola') {
            Icon = Sacola;
          }
          return <Icon color={color} />;
        },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'red',
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#111',
          display: 'flex',
        },
      })}>
      <Tab.Screen name="Inicio" component={StackHome} />
      <Tab.Screen name="Sacola" component={StackSacola} />
    </Tab.Navigator>
  );
};
