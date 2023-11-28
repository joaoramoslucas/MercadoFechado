import { TouchableOpacity, Text, View } from 'react-native';

import { s } from './style';

type ButtonProps = {
   onClick(): void
   }

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <View>
        <TouchableOpacity style={s.containerButton} onPress={onClick}>
          <Text style={s.texto}>Adicionar à Sacola</Text>
        </TouchableOpacity>
     </View>
   )}