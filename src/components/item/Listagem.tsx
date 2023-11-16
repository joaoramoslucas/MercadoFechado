import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { formatCurrency } from "../../Utils/formatCurrency";
import { useNavigation } from "@react-navigation/native";
import { DetalheDosProdutos } from "../../pages/Home/Produto/DetalheDosProdutos";

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
const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 200,
            height: 200,
        },
        shadowOpacityColor: 10,
        shadowRadius: 10,
        elevation: 5,
        flexDirection: "row",
    },
    title: {
        color: "black",
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 20,
        maxHeight: 100,
        fontFamily: 'Montserrat'
    },
    text: {
        color: "green",
        fontSize: 20,
        marginBottom: 5,
        fontWeight: "bold"
    },
    infoContainer: {
        flex: 1,
        marginLeft: 17,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 7,
    },
    viewImage: {
        width: 140,
        height: 140
    },
    backGround: {
        backgroundColor: 'rgba(237, 237, 237, 0.60)',
    },
});