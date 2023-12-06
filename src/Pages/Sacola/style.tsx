import React from "react";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    productContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: '#ddd',
      paddingVertical: 8,
      marginBottom: 8,
    },
    productInfo: {
      flex: 1,
      marginLeft: 8,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    productPrice: {
      fontSize: 14,
      color: '#888',
    },
    productImage: {
      width: 100,
      height: 100,
      borderRadius: 4,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityText: {
      fontSize: 14,
      marginRight: 8,
    },
    button: {
      height: 30,
      padding: 5,
      borderRadius: 5,
      backgroundColor: 'red',
      textAlign: "center",
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
      fontFamily: 'Montserrat',
      bottom: 1,
      marginLeft: 30
    },
    sacola: {
      fontWeight: "bold",
      color: 'black',
      textAlign: "center",
      fontFamily: 'Montserrat',
      height: 50,
      width: '100%',
      fontSize: 20,
    },
    fim: {
      height: 30,
      padding: 5,
      borderRadius: 5,
      backgroundColor: 'green',
      textAlign: "center",
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
      fontFamily: 'Montserrat', 
      bottom: 1,
      marginRight: 30
    }
  });
  