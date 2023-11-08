import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { formatCurrency } from "../../Utils/formatCurrency";

interface ListagemProps {
    id: string
    title: string
    price: number
    sold_quantity: number
    thumbnail: string
    condition: string
}

export const Listagem: React.FC<ListagemProps> = ({ title, price, thumbnail }) =>
    <TouchableOpacity style={styles.backGround} activeOpacity={1}>
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#b42424",
        padding: 19,
        margin: 10,
        borderRadius: 13,
        shadowColor: "white",
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
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 20,
        maxHeight: 100,
        fontFamily: 'Montserrat'
    },
    text: {
        color: "white",
        fontSize: 20,
        marginBottom: 5,
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
        backgroundColor: '#000000',
    },
});
