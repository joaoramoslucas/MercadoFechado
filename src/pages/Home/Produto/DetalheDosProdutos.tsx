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
      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.preco}>{buy}</Text>
      <Text style={styles.text}>{sold_quantity}</Text>
      <Text style={styles.text}>{preco}</Text>
      <Text style={styles.text}>{listar_tipo_id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 20,
    maxHeight: 100,

  },
  text: {
    color: "white",
    fontSize: 20,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 7,
  },
  viewImage: {
    width: 140,
    height: 140
  },
  backGround: {
    backgroundColor: '#000000',
},
  preco: {
    backgroundColor: 'black',
    color: "green"
},
});