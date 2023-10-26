import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabScreens from './src/routes/tab';

interface Product {
  id: string;
  nome: string;
  preco: number;
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <TabScreens />
    </NavigationContainer>
  );
}

export default App;
