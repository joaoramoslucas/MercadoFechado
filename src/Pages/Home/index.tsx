import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import { api } from "../../Service";
import SearchBar from "../../Componentes/SearchBar";
import { Listagem } from "../../Componentes/Listagem";

type Product = {
  id: string;
  nome: string;
  preco: number;
};

export const Home = (): JSX.Element => {
  const [isLoad, setLoad] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const minhaConsulta = "produto";

    api(minhaConsulta)
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error);
      })
      .finally(() => {
        setLoad(false);
      });
  };

  const handleSearch = (text: string) => {
    const trimmedSearchText = text.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.nome &&
        typeof product.nome === 'string' &&
        product.nome.toLowerCase().includes(trimmedSearchText)
    );
    setFilteredProducts(filtered);
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoad ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (        
        <View>
          <SearchBar onSearch={handleSearch} />
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
