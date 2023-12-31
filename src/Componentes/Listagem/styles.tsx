import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
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
 