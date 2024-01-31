import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { s } from '../Sacola/style'
import ProductList from "../../Componentes/BagActions/FlatList";
import { BagActions } from "../../Componentes/BagActions/ClearBag";

interface Product {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  thumbnail: string;
  onAddToCart: (product: Product) => void;
}

export const Bag = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchProducts = async () => {
        try {
          const storedProducts = await AsyncStorage.getItem('my-key');
          const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
          const updatedProducts = await parsedProducts.map((product: any) => ({
            id: product.id,
            nome: product.nome,
            preco: product.preco,
            quantidade: product.quantidade || 1,
            thumbnail: product.thumbnail,
          }));
          setProducts(updatedProducts);
        } catch (error) {
          console.error('Erro ao carregar a sacola:', error);
        }};
      fetchProducts();
    }, []))

  const atualizarSacola = async (updateProducts: Product[]) => {
    setProducts(updateProducts);
    await AsyncStorage.setItem('my-key', JSON.stringify(updateProducts));
  }

  const calcularTotal = (): string => {
    const total = products.reduce((accumulator, product) => {
      if (product.quantidade > 0) {
        return accumulator + (product.preco * product.quantidade);
      }
      return accumulator;
    }, 0);
    return total.toFixed(2);
  };

  const clearBag = async () => {
    try {
      await AsyncStorage.removeItem('my-key');
      setProducts([]);
    } catch (error) {
      console.error('Erro ao limpar a sacola:', error);
    }
  };

  const increaseQuantity = (productId: string) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantidade: product.quantidade + 1 || 1 };
      }
      return product;
    });
    atualizarSacola(updatedProducts);
  };

  const decreaseQuantity = (productId: string) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantidade > 1) {
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
      <ProductList products={products} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
      <BagActions clearBag={clearBag} />
      <Text style={s.total}>Total: R${calcularTotal()}</Text>
    </View>
  );
};