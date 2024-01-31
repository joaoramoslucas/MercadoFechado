import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { api } from '../../Service/';

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

interface SearchBarProps {
  onSearch: (products: Product[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation();

  const handleSearch = async () => {
    try {
      console.log(typeof searchText);
      
      if (typeof searchText == 'string') {
        const cleanedSearchText = searchText.trim();

        if (cleanedSearchText) {
          setLoading(true);

          const data = await api(cleanedSearchText);
          console.log(searchText);
          

          if (data.length > 0 && searchText) {
            setProducts(data);
            onSearch(data);
            console.log('Produtos encontrados:', data);
          } else {
            setProducts([]);
            onSearch([]);
            console.log('Nenhum produto encontrado.');
          }
        } else {
          setProducts([]);
          onSearch([]);
          console.log('Nenhum produto encontrado.');          
        }
      }
    } catch (error) {
      console.error("Ocorreu um erro na pesquisa:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('Produto', { productId: item.id })}>
      <Image style={styles.productImage} source={{ uri: item.thumbnail }} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Icon name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator size="large" color="green" />}

      {!loading && products.length === 0 && (
        <Text style={styles.noResultsText}>Nenhum resultado encontrado.</Text>
      )}

      {!loading && products.length > 0 && (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default SearchBar;
