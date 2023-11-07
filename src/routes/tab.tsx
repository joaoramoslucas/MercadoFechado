import React from 'react';
import { Settings, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/Home';
import Casa from '../assets/icons/casa.svg';
import Sacola from '../assets/icons/sacola.svg';
import { SecondScreen } from '../pages/Home/ScreenCarrinho/SecondScreen';

const Tab = createBottomTabNavigator();

type TabScreensProps = {};

export const TabScreens: React.FC<TabScreensProps> = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let Icon: React.FC<{ color: string }> = Casa; // Certifique-se de que Casa seja um componente React válido
          if (route.name === 'Sacola') {
            Icon = Sacola; // Atribua diretamente o componente Sacola à variável Icon
          }
          return <Icon color={color} />;
          // Ajuste o tamanho do ícone conforme necessário diretamente no componente SVG
        },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'red',
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#111',
          display: 'flex',
        },
      })}
    >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Sacola" component={SecondScreen} />
    </Tab.Navigator>
  );
};
