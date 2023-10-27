import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackScreen } from "./Stack";

type Product = {
  id: string
  nome: string
  preco: number
}

export const App = (): JSX.Element =>
  <NavigationContainer>
    <StackScreen />
  </NavigationContainer>