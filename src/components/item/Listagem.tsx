import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface ListagemProps {
    id: string
    title: string
    price: number
    sold_quantity: number
    thumbnail: string
    condition: string
}

export const Listagem: React.FC<ListagemProps> = ({ title, price, thumbnail }) =>
    <TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.viewImage}>
                <Image style={styles.image} source={{ uri: thumbnail }} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>Preço: {price}</Text>
            </View>
        </View>
    </TouchableOpacity>

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        padding: 16,
        margin: 8,
        borderRadius: 8,
        shadowColor: "#000000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacityColor: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: "row",
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        maxHeight: 100
    },
    text: {
        color: "white",
        fontSize: 16,
        marginBottom: 4,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 8,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    viewImage: {
        width: 130,
        height: 130
    }
});
