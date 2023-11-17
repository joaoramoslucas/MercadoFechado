// DetalheDosProdutos
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { formatCurrency } from '../../../Utils/formatCurrency';
import { styleButton } from '../../../components/Botoes/button';
import { styleContainer } from '../../../components/Botoes/styles';


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
        <Text style={styleContainer.quantidade}>Em estoque: {sold_quantity}</Text>
        <Text style={styleContainer.preco}>{formatCurrency(price, 'BRL')}</Text>
      </View>
      <View style={styleContainer.containerButton}>
        <TouchableOpacity>
          <Text style={styleButton.button}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};