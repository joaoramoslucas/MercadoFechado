import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from '../item/Styles'
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
export const Listagem: React.FC<ListagemProps> = ({ title, price, thumbnail, sold_quantity, condition, id }) => {
    const navigation = useNavigation()

    function retorno() {
        navigation.navigate("Produto", {id: id,
            title: title,
            price: price,
            sold_quantity: sold_quantity,
            thumbnail: thumbnail,
            condition: condition})
    }
    return (
        <TouchableOpacity style={styles.backGround} activeOpacity={1} onPress={() => {
            retorno()
        }}>
            <View style={styles.container}>
                <View style={styles.viewImage}>
                    <Image style={styles.image} source={{ uri: thumbnail }} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{formatCurrency(price, 'BRL')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
