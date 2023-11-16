// DetalheDosProdutos
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Product {
  id: string
  title: string
  price: number
  sold_quantity: number
  thumbnail: string
  condition: string
  listar_tipo_id: string
}

export const DetalheDosProdutos: React.FC = () => {
  const route = useRoute();
  const { params } = route

  const { thumbnail, name, price, buy, sold_quantity, listar_tipo_id } = route.params;

  return (

    <View style={styles.container}>
      <View style={styles.containerProduct}>
        <Image style={styles.image} source={{ uri: thumbnail }} />
      </View>
      <View style={styles.containerButtom}>
        <TouchableOpacity>
          <Text style={styles.title}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height: '100%',
    width: '100%',
  },
  containerButtom: {
    width: 200,
    height: 40,
    backgroundColor: 'green'
  },
  containerProduct: {
    backgroundColor: "white",
    padding: 19,
    margin: 17,
    height: 500,
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
  title: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 20,
    maxHeight: 100,
    fontFamily: 'Montserrat'
  },
  text: {
    color: "black",
    fontSize: 20,
    marginBottom: 5,
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