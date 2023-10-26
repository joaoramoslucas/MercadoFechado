import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface ListagemProps {
    id: string;
    title: string;
    price: number;
    sold_quantity: number;
    thumbnail: string;
    condition: string;
}
const Listagem: React.FC<ListagemProps> = ({ title, price, thumbnail }) => {
    return (

        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>Preço: {price}</Text>
                <Image style={styles.image} source={{ uri: thumbnail }} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fffff",
        padding: 16,
        margin: 8,
        borderRadius: 8,
        shadowColor: "#00000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacityColor: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        marginBottom: 4,
    },
    image: {
        width: 100,
        height: 100,
    },
});
export default Listagem;