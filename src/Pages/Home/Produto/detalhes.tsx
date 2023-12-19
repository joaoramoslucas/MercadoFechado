import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../../Componentes/Botoes';
import { s } from '../../../Componentes/Botoes/style';
import Voltar from '../../../Assets/Icons/voltar.svg';
import { formatCurrency } from '../../../Utils/formatCurrency';

export const DetalheDosProdutos: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { thumbnail, title, price, sold_quantity } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleBagPress = async () => {
    try {
      const existingItems = await AsyncStorage.getItem('my-key');
      let products = existingItems ? JSON.parse(existingItems) : [];
      const newProduct = { id: String(Math.random()), title: title, price: price, thumbnail: thumbnail }; 

      if (products.length >= 10) {
        console.log('Limite de 10 produtos atingido. Não é possível adicionar mais produtos.');
        return;
      }
      products = [...products, newProduct];
      await AsyncStorage.setItem('my-key', JSON.stringify(products));
      console.log('Produto adicionado à sacola:', newProduct);
      navigation.navigate("Home");
    } catch (error) {
      console.error('Erro ao adicionar o produto à sacola:', error);
    }};

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={handleBackPress} style={s.headerLeft}>
        <Voltar />
        <Text style={s.quantidade}>Em estoque: {sold_quantity}</Text>
      </TouchableOpacity>
      <View style={s.containerProduct}>
        <Image style={s.image} source={{ uri: thumbnail.replace(/\w.jpg/gi, 'W.jpg') }} />
      </View>
      <View style={s.infoContainer}>
        <Text style={s.descricao}>{title}</Text>
      </View>
      <View style={s.preco}>
        <Text style={s.preco}>Total: {formatCurrency(price, 'BRL')}</Text>
      </View>
      <Button onPress={handleBagPress} />
    </View>
  );
};