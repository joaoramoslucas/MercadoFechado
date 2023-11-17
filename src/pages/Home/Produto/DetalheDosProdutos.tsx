// DetalheDosProdutos
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { style } from '../../../components/Botoes/button';
import { style2 } from '../../../components/Botoes/';


export const DetalheDosProdutos: React.FC = () => {
  const route = useRoute();
  const { thumbnail, name, price, buy, sold_quantity, listar_tipo_id } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.containerProduct}>
        <Image style={styles.image} source={{ uri: thumbnail }} />
      </View>
      <View style={styles.infoContainer}>
        <Text></Text>
      </View>
      <View style={style2.style2}>
        <TouchableOpacity>
          <Text style={style.button}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    height: '100%',
    width: '100%',
  },
  containerProduct: {
    backgroundColor: "white",
    padding: 19,
    margin: 10,
    width: 400,
    height: 400,
    borderRadius: 13,
    shadowColor: "black",
    shadowOffset: {
      width: 200,
      height: 200,
    },
    shadowOpacityColor: 10,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: "row",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 17,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 7,
  },
  viewImage: {
    width: 100,
    height: 140,
    marginBottom: 10,
  },
  backGround: {
    backgroundColor: '#000000',
  },
});