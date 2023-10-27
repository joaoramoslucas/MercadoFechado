import * as React from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/Home';
import { Setting } from '../Setting/Setting';

const Tab = createBottomTabNavigator();

export const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
        
          if (route.name === 'Inicio') {
            iconName = focused
              ? 'ios-home' // Ícone da casa quando a guia está ativa
              : 'ios-home-outline'; // Ícone da casa quando a guia está inativa
          } else if (route.name === 'Sacola') {
            iconName = focused
              ? 'ios-basket' // Ícone da sacola quando a guia está ativa
              : 'ios-basket-outline'; // Ícone da sacola quando a guia está inativa
          }
        
          // Retorne o ícone do Ionicons correspondente
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: style.tab, // Use o estilo definido para a barra de navegação
        activeTintColor: 'red', // Cor do ícone e texto da guia ativa
        inactiveTintColor: 'gray', // Cor do ícone e texto das guias inativas
      }}
    >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Sacola" component={Setting} />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  tab: {
    backgroundColor: 'black',
  },
});
