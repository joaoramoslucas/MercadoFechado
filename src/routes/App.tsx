import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { TabScreens } from "./tab";

export const App = (): JSX.Element =>
  <NavigationContainer>
    <TabScreens/>
  </NavigationContainer>