import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Listagem from "../components/item/Listagem";
import api from "../service/api";
import CustomSearchBar from "../components/SearchBar/SearchBar";

export default function Home2(): JSX.Element {
  interface Product {
    id: string;
    nome: string;
    preco: number;
  }
  const [products, setProducts] = useState<Product[]>([]); // Estado para armazenar os produtos
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };


  useEffect(() => {
    const minhaConsulta = 'produto';

    api(minhaConsulta)
      .then(data => {
        // Atualize o estado com os dados retornados
        setProducts(data);
        // Lide com erros, se necessário
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }, []);

  const filterProducts = (data: Product[], searchText: string) => {
    const filtered = data.filter(product =>
      product.nome && product.nome.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  return (

    <View>
      <CustomSearchBar
        placeholder="Pesquisar..."
        onChangeText={handleSearch}
        value={searchText}
      />
      <FlatList
        ListHeaderComponent={(
          <View>
            <Text>Lista de Produtos:</Text>
          </View>
        )}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Listagem {...item} />
        )}
      />
    </View>
  )
}
