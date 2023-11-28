import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../../Pages/Home";
import { DetalheDosProdutos } from "../../Pages/Home/Produto/detalhes";

const Stack = createStackNavigator();

export const StackHome = () =>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Produto" component={DetalheDosProdutos} />
    </Stack.Navigator>

