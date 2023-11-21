// DetalheDosProdutos
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { formatCurrency } from '../../../Utils/formatCurrency';
import { styleButton } from '../../../components/Botoes/Button';
import { styleContainer } from '../../../components/Botoes/Styles';
import Voltar from '../../../assets/icons/voltar.svg';

export const DetalheDosProdutos: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { thumbnail, title, price, sold_quantity } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styleContainer.container}>
      <TouchableOpacity onPress={handleBackPress} style={styleContainer.headerLeft}>
        <Voltar />
      </TouchableOpacity>
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
        <Text style={styleContainer.preco}>Total: {formatCurrency(price, 'BRL')}</Text>
      </View>
      <View style={styleContainer.containerButton}>
        <TouchableOpacity>
          <Text style={styleButton.button}>Adicionar à Sacola</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};