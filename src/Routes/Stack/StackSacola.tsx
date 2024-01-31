import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Bag } from "../../Pages/Sacola";

const Stack = createStackNavigator();

export const StackSacola = () =>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Sacola" component={Bag} />
    </Stack.Navigator>

