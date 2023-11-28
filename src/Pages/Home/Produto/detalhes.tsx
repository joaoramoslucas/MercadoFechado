// DetalheDosProdutos
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../../Componentes/Botoes';
import Voltar from '../../../Assets/Icons/voltar.svg';
import { formatCurrency } from '../../../Utils/formatCurrency';
import { s } from '../../../Componentes/Botoes/style';


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
      <Button />
    </View>
  );
};