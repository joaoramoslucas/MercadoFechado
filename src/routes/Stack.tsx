import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { TabScreens } from "./tab";

const Stack = createStackNavigator();

export const StackScreen = () =>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabScreens} />
    </Stack.Navigator>

