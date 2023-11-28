import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import { api } from "../../service/api";
import { Listagem } from "../../Componentes/Listagem";
import { CustomSearchBar } from "../../Componentes/SearchBar";

type Product = {
  id: string;
  nome: string;
  preco: number;
};

export const Home = (): JSX.Element => {
  const [isLoad, setLoad] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState<Product[]>([]); // Estado para armazenar os produtos
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const minhaConsulta = "produto";

    api(minhaConsulta)
      .then((data) => {
        // Atualize o estado com os dados retornados
        setProducts(data);
        // Lide com erros, se necessário
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error);
      })
      .finally(() => {
        setLoad(false);
      });
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const filterProducts = (data: Product[], searchText: string) => {
    const filtered = data.filter((product) =>
      product.nome && product.nome.toLowerCase().includes(searchText.toLowerCase())
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
        <FlatList
          ListHeaderComponent={(
            <CustomSearchBar
              placeholder="Pesquisar..."
              onChangeText={handleSearch}
              value={searchText}
            />
          )}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Listagem {...item} />}
        />
      )}
    </View>
  );
};
