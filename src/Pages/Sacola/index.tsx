import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";


import { s } from '../Sacola/style'
import { useFocusEffect } from "@react-navigation/native";
import { BagActions } from "../../Componentes/BagActions/ClearBag";
import { QuantityButtons } from "../../Componentes/BagActions/SomarSubtrairQuantidade";

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
        console.log(storedProducts, parsedProducts, 2);
        
        // Atualize as propriedades dos produtos conforme necessário
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
      }
    };
    fetchProducts();
  }, [])
  )

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
      console.log('Sacola limpa');
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
            <QuantityButtons 
            quantity={item.quantidade}
            increase={() => increaseQuantity(item.id)}
            decrease={() => decreaseQuantity(item.id)}
            />
            </View>
          </View>
        )}
      />
      <BagActions clearBag={clearBag}/>
      <Text style={s.total}>Total: R${calcularTotal()}</Text>
    </View>
  );
};
