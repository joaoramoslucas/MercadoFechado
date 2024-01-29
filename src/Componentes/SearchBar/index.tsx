// Seu componente SearchBar.tsx
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { api } from '../../Service/';

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

interface SearchBarProps {
  onSearch: (products: Product[]) => void;
  onAddToCart: (product: Product) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onAddToCart }) => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  async function handleSearch() {
    try {
      if (typeof searchText === 'string') {
        const cleanedSearchText = searchText.trim();

        if (cleanedSearchText) {
          const data = await api(cleanedSearchText);

          if (Array.isArray(data) && data.length > 0) {
            setProducts(data);
            onSearch(data);
            console.log('Produtos encontrados:', data);
          } else {
            setProducts([]);
            onSearch([]);
            console.log('Nenhum produto encontrado.');
          }
        }
      }
    } catch (error) {
      console.error("Ocorreu um erro na pesquisa:", error);
    }
  }

  const handleAddToCart = (product: Product) => {
    const { title, price, thumbnail } = product;
    const productAddToCart: Product = { id: Date.now().toString(), title, price, thumbnail }

    onAddToCart(productAddToCart);
    console.log('Produto adicionado à sacola na tela de pesquisa:', product);
  };

  return (
    <View>
      <View style={style.searchContainer}>
        <TextInput
          style={style.input}
          placeholder="Pesquisar..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={style.button} onPress={handleSearch}>
          <Icon name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={style.productItem}>
            <Image style={style.productImage} source={{ uri: item.thumbnail }} />
            <View style={style.productDetails}>
              <Text style={style.productTitle}>{item.title}</Text>
              <Text style={style.productPrice}>R$ {item.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={style.addToCartButton} onPress={() => handleAddToCart(item)}>
              <Text style={style.addToCartButtonText}>Adicionar à Sacola</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  button: {
    padding: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'green',
    marginTop: 5,
  },
  addToCartButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SearchBar;
