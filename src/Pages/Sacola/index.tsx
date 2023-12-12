import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";

import { s } from '../Sacola/style'

type Product = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  thumbnail: string;
};

export const Bag = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const storedProducts = await AsyncStorage.getItem('my-key');
        const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
        const productWithPrice = parsedProducts.map((product) => ({
          ...product,
          preco: product.price || 0,
        }));
        setProducts(productWithPrice);
      };
      fetchProducts();
    } catch (error) {
      console.error('Erro ao carregar a sacola:', error);
    }
  }, [products]);
  const clearBag = async () => {
    try {
      await AsyncStorage.removeItem('my-key');
      setProducts([]);
      console.log('Sacola limpa');
    } catch (error) {
      console.error('Erro ao limpar a sacola:', error);
    }
  };
  const increaseQuantity = (productId: string) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantidade: product.quantidade + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
    AsyncStorage.setItem('my-key', JSON.stringify(updatedProducts));
  };
  const decreaseQuantity = (productId: string) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantidade > 0) {
        return { ...product, quantidade: product.quantidade - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
    AsyncStorage.setItem('my-key', JSON.stringify(updatedProducts));
  };
  return (
    <View style={s.container}>
      <Text style={s.sacola}>Sacola:</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={s.productContainer}>
            <Image
              source={{ uri: item.thumbnail }}
              style={s.productImage}
              onError={(error) => console.error('Erro ao carregar imagem:', error.nativeEvent.error)}
            />
            <View style={s.productInfo}>
              <Text style={s.productName}>{item.nome}</Text>
              <Text style={s.productPrice}>
                {item.preco ? `R$${item.preco.toFixed(2)}` : 'Preço Indefinido'}
              </Text>
              <View style={s.quantityContainer}>
                <Text style={s.quantityText}>Quantidade: {item.quantidade}</Text>
                <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                  <Text style={s.quantityButton}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                  <Text style={s.botaoAdd}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={clearBag} style={s.button} >
          <Text style={s.texto}>Limpar Sacola</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.fim}>
          <Text style={s.texto}> Finalizar Compra </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
