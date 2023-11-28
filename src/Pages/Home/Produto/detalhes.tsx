// DetalheDosProdutos
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../../Componentes/Botoes';
import Voltar from '../../../Assets/Icons/voltar.svg';
import { formatCurrency } from '../../../Utils/formatCurrency';
import { styleContainer } from '../../../Componentes/Botoes/style';


export const DetalheDosProdutos: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { thumbnail, title, price, sold_quantity } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleBagPress = async () => {
    try {
      let obj = [{ title: title, thumbnail: thumbnail, price: price }]
      await AsyncStorage.setItem('my-key', JSON.stringify(obj));
      console.log('teste')
    } catch (e) {
}};

  return (
    <View style={styleContainer.container}>
      <TouchableOpacity onPress={handleBackPress} style={styleContainer.headerLeft}>
        <Voltar />
      </TouchableOpacity>
      <View style={styleContainer.containerProduct}>
        <Image style={styleContainer.image} source={{ uri: thumbnail.replace(/\w.jpg/gi, 'W.jpg') }} />
      </View>
      <View style={styleContainer.infoContainer}>
        <Text style={styleContainer.descricao}>{title}</Text>
      </View>
      <View style={styleContainer.quantidade}>
        <Text style={styleContainer.quantidade}>Em estoque: {sold_quantity}</Text>
      </View>
      <View style={styleContainer.preco}>
        <Text style={styleContainer.preco}>Total: {formatCurrency(price, 'BRL')}</Text>
      </View>
      <Button />
    </View>
  );
};