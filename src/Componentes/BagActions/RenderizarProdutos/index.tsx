import { s } from '../../../Pages/Sacola/style'
import { View, Image, Text } from "react-native";
import { QuantityButtons } from "../SomarSubtrairQuantidade";


export const ProductItem = ({ item, increaseQuantity, decreaseQuantity }) => (
    <View style={s.productContainer}>
        <Image
            source={{ uri: item.thumbnail }}
            style={s.productImage}
            onError={(error) => console.error('Erro ao carregar imagem:', error.nativeEvent.error)}
        />
        <View style={s.productInfo}>
            <Text style={s.productName}>{item.nome}</Text>
            <Text style={s.productPrice}>
                {item.preco ? `R$${item.preco.toFixed(2)}` : 'Preço Indefinido'}
            </Text>
            <QuantityButtons
                quantity={item.quantidade}
                increase={() => increaseQuantity(item.id)}
                decrease={() => decreaseQuantity(item.id)}
            />
        </View>
    </View>
);