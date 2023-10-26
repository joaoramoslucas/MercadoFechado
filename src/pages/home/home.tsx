import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home2 from "../../Home/home2";

const Stack = createStackNavigator();

export default function HomeScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home2} />
            <Stack.Screen name="Sacola" component={Home2} />
        </Stack.Navigator>
    )
}