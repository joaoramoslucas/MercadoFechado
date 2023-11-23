import { styleContainer } from './Styles';

import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export const styleButton = StyleSheet.create({
  button: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
  },
})

// type ButtonProps = {
//   onClick(): void
// }
//COLOCAR NOME DOS COMPONENTES MINUSCULO E DAS PASTAS MAIUSCULA, LEMBRAR DE COLOCAR O NOME DE INDEX PARA O COMPONENTE.


// export const Button = ({ onClick }: ButtonProps) => {

//   return (
//     <TouchableOpacity onPress={onClick}>
//       <Text style={styleContainer.container}>Adicionar à Sacola</Text>
//     </TouchableOpacity>
//   )
// }