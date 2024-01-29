import React from 'react';
import { FlatList } from 'react-native';
import { ProductItem } from '../RenderizarProdutos'; // Certifique-se de importar corretamente o componente ProductItem

type Product = {
    id: string;
    nome: string;
    preco: number;
}

type ProductListProps = {
  products: Product[];
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, increaseQuantity, decreaseQuantity }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductItem
          item={item}
          increaseQuantity={() => increaseQuantity(item.id)}
          decreaseQuantity={() => decreaseQuantity(item.id)}
        />
      )}
    />
  );
};

export default ProductList;
