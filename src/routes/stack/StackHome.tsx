import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../../pages/Home";
import { DetalheDosProdutos } from "../../pages/Home/Produto/DetalheDosProdutos";

const Stack = createStackNavigator();

export const StackHome = () =>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Produto" component={DetalheDosProdutos} />
    </Stack.Navigator>

