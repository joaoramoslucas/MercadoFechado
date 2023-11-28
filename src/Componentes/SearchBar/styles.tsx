import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 30,
        borderWidth: 2,
        borderColor: '#d6d6d6',
        paddingHorizontal: 20,
        marginHorizontal: 40,
    },
    input: {
        flex: 1,
        fontSize: 13,
        height: 50,
        color: 'black',
    },
    searchButton: {
        fontSize: 11,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#d6d6d6',
        paddingHorizontal: 15,
        marginLeft: 10,
    },
    buttonText: {
        color: 'black',
    },
});