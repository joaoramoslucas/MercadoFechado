import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Product = {
  id: string;
  nome: string;
  preco: number;

};


export const Bag = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    try {
      async function fetch() {
        const get = await AsyncStorage.getItem('my-key');
        const json = JSON.parse(get)
        setProducts(json)
      }
      fetch();
    } catch (e) {
      // saving error
    }
  }, [])
  console.log(products, 1);
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TELA 2 </Text>
      </View>
    </>
  )
}