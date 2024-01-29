import { s } from '../../../Pages/Sacola/style'
import { View, TouchableOpacity, Text } from "react-native";


export const QuantityButtons = ({ quantity, increase, decrease }) => (
  <View style={s.quantityContainer}>
    <Text style={s.quantityText}>Quantidade: {quantity}</Text>
    <TouchableOpacity onPress={decrease}>
      <Text style={s.quantityButton}>-</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={increase}>
      <Text style={s.botaoAdd}>+</Text>
    </TouchableOpacity>
  </View>
);