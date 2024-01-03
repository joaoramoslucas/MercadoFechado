import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import SearchableDropdown from 'react-native-searchable-dropdown';

import { api } from "../../Service";
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
    const trimmedSearchText = text.trim().toLowerCase();
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
          <SearchableDropdown
            onTextChange={handleSearch}
            onItemSelect={(item) => console.log(item)} // Você pode personalizar isso com base em seus requisitos
            containerStyle={{ padding: 5 }}
            textInputStyle={{
              padding: 12,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={filteredProducts.map((product) => ({ id: product.id, name: product.nome }))}
            defaultIndex={0}
            placeholder="Pesquisar..."
          />
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
