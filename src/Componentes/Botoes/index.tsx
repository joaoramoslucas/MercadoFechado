import { TouchableOpacity, Text, View } from 'react-native';

import { styleContainer } from './style';

type ButtonProps = {
   onClick(): void
   }

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <View>
        <TouchableOpacity style={styleContainer.containerButton} onPress={onClick}>
          <Text style={styleContainer.texto}>Adicionar à Sacola</Text>
        </TouchableOpacity>
     </View>
   )}