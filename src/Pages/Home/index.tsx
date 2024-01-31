// Sua tela Home.tsx
import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, FlatList, ActivityIndicator, TextInput } from "react-native";

import { api } from "../../Service";
import SearchBar from "../../Componentes/SearchBar";
import { Listagem } from "../../Componentes/Listagem";
import { useFocusEffect } from "@react-navigation/native";

type Product = {
  id: string;
  nome: string;
  preco: number;
};

export const Home = (): JSX.Element => {
  const [isLoad, setLoad] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchProducts, setSearchProducts] = useState<Product[]>([]);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])    
  )

const search = async(value: string) => {
  const teste = value.trim()
  const data = await api(teste);
  console.log(data);
  

  let arr = [...searchProducts]
  setFilteredProducts(arr.filter(exist => exist.title.includes(value)))
  console.log(arr);
}


const getData = () => {
  const minhaConsulta = "/produto";

  api(minhaConsulta)
    .then((data) => {
      setProducts(data);
      setFilteredProducts(data);
      setSearchProducts(data);
      
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    })
    .finally(() => {
      setLoad(false);
    });
};
const handleSearch = (text: string) => {
  if (typeof text === 'string') {
    const trimmedSearchText = text.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.nome &&
        typeof product.nome === 'string' &&
        product.nome.toLowerCase().includes(trimmedSearchText)
    );
    setFilteredProducts(filtered);
  }
};
const handleAddToCart = async (product: Product) => {
  try {
    // Lógica para adicionar o produto à sacola
    // Vamos assumir que você tem uma chave 'sacola' no AsyncStorage
    const existingCart = await AsyncStorage.getItem('sacola');
    const currentCart = existingCart ? JSON.parse(existingCart) : [];
    const updatedCart = [...currentCart, product];

    await AsyncStorage.setItem('sacola', JSON.stringify(updatedCart));

    console.log('Produto adicionado à sacola:', product);
  } catch (error) {
    console.error('Erro ao adicionar o produto à sacola:', error);
  }
};

return (
  <View style={{ flex: 1 }}>
    {isLoad ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <View>

        {/* <SearchBar onSearch={handleSearch} onAddToCart={handleAddToCart} /> */}
        <TextInput style={{
          width: '100%', height: 48,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          borderRadius: 10,
          marginTop: 20,
          elevation: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1.5 },
          shadowOpacity: 0.4,
          shadowRadius: 4,
        }}
          onChangeText={value => search(value)} />
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Listagem {...item} />}
        />
      </View>
    )}
  </View>
);
};
