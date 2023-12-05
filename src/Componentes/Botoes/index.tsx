// Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { s } from './style';

type ButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const Button: React.FC<ButtonProps> = ({ onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={s.texto}>Adicionar à Sacola</Text>
    </TouchableOpacity>
  );
};
