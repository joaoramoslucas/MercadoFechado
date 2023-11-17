// DetalheDosProdutos
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { formatCurrency } from '../../../Utils/formatCurrency';
import { styleButton } from '../../../components/Botoes/Button';
import { styleContainer } from '../../../components/Botoes/Styles';


export const DetalheDosProdutos: React.FC = () => {
  const route = useRoute();
  const { thumbnail, title, price, sold_quantity } = route.params;

  return (
    <View style={styleContainer.container}>
      <View style={styleContainer.containerProduct}>
        <Image style={styleContainer.image} source={{ uri: thumbnail }} />
      </View>
      <View style={styleContainer.infoContainer}>
        <Text style={styleContainer.descricao}>{title}</Text>
      </View>
      <View style={styleContainer.infoContainer}>
        <Text style={styleContainer.quantidade}>Em estoque: {sold_quantity}</Text>
      </View>
      <View style={styleContainer.infoContainer}>
        <Text style={styleContainer.preco}>Apenas: {formatCurrency(price, 'BRL')}</Text>
      </View>
      <View style={styleContainer.containerButton}>
        <TouchableOpacity>
          <Text style={styleButton.button}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};