// DetalheDosProdutos.tsx

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

type Product = {
  thumbnail: string
  nome: string
  preco: number
  buy: string
  sold_quantity: number
  listar_tipo_id: string
};

export const DetalheDosProdutos: React.FC = () => {
  const route = useRoute();
  const { thumbnail, nome, preco, buy, sold_quantity, listar_tipo_id } = route.params;

  return (
    <View>
      {/* Renderize os detalhes do produto aqui usando as propriedades extraídas */}
      <Image source={{ uri: thumbnail }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{nome}</Text>
      <Text>{buy}</Text>
      <Text>{sold_quantity}</Text>
      <Text>{preco}</Text>
      <Text>{listar_tipo_id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Seus estilos aqui
});