import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SecondScreen } from "../pages/Sacola/SecondScreen";

const Stack = createStackNavigator();

export const StackSacola = () =>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Sacola" component={SecondScreen} />
    </Stack.Navigator>

