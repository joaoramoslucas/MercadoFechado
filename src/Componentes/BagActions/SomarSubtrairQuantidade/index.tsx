import { View, TouchableOpacity, Text } from "react-native";
import { s } from '../../../Pages/Sacola/style'


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