import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { TabScreens } from "./tab";

type Product = {
  id: string
  nome: string
  preco: number
}

export const App = (): JSX.Element =>
  <NavigationContainer>
    <TabScreens/>
  </NavigationContainer>