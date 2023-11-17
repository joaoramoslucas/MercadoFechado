// DetalheDosProdutos
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { formatCurrency } from '../../../Utils/formatCurrency';
import { styleButton } from '../../../components/Botoes/Button';
import { styleContainer } from '../../../components/Botoes/Styles';
import voltar from '../../../assets/icons/voltar.svg';

export const DetalheDosProdutos: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { thumbnail, title, price, sold_quantity } = route.params;

  const handleVoltarPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styleContainer.container}>
      <View style={styleContainer.containerProduct}>
        <Image style={styleContainer.image} source={{ uri: thumbnail }} />
        <View style={styleContainer.containerProduct}>
          <TouchableOpacity onPress={handleVoltarPress} style={styleContainer.headerLeft}>
            <Image style={styleContainer.setaImage} source={{ uri: thumbnail || '' }} />

          </TouchableOpacity>
        </View>
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
          <Text style={styleButton.button}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};