import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { s } from '../Listagem/styles'
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "../../Utils/formatCurrency";

interface ListagemProps {
    id: string
    title: string
    price: number
    sold_quantity: number
    thumbnail: string
    condition: string
}
export const Listagem: React.FC<ListagemProps> = ({ id, title, price, sold_quantity, thumbnail, condition }) => {
    const navigation = useNavigation()

    function retorno() {
        navigation.navigate("Produto", {
            id: id,
            title: title,
            price: price,
            sold_quantity: sold_quantity,
            thumbnail: thumbnail,
            condition: condition})
    }
    return (
        <TouchableOpacity style={s.backGround} activeOpacity={1} onPress={() => {
            retorno()
        }}>
            <View style={s.container}>
                <View style={s.viewImage}>
                    <Image style={s.image} source={{ uri: thumbnail.replace(/\w.jpg/gi, 'W.jpg') }} />
                </View>
                <View style={s.infoContainer}>
                    <Text style={s.title}>{title}</Text>
                    <Text style={s.text}>{formatCurrency(price, 'BRL')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
