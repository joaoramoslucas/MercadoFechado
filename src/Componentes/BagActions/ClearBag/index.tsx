import React from "react"
import { View, TouchableOpacity, Text } from "react-native"

import { s } from '../../../Pages/Sacola/style'

export const BagActions = ({ clearBag }) => (
  <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
    <TouchableOpacity onPress={clearBag} style={s.button}>
      <Text style={s.texto}>Limpar Sacola</Text>
    </TouchableOpacity>
    <TouchableOpacity style={s.fim}>
      <Text style={s.texto}> Finalizar Compra </Text>
    </TouchableOpacity>
  </View>
);