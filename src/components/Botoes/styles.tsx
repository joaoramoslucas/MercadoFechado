import { StyleSheet, } from "react-native";

export const styleContainer = StyleSheet.create({
  containerButton: {
    width: '95%',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'green',
    marginBottom: 5,
    marginLeft: 10,
  },
  container: {
    paddingTop: 20,
    height: '100%',
    width: '100%',
  },
  containerProduct: {
    backgroundColor: "white",
    padding: 19,
    margin: 10,
    width: 400,
    height: 400,
    borderRadius: 13,
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
  infoContainer: {
    flex: 1,
    marginLeft: 17,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  viewImage: {
    width: 100,
    height: 140,
  },
  quantidade: {
    color: "black",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 20,
    maxHeight: 100,
    fontFamily: 'Montserrat'
  },
  descricao: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    maxHeight: 100,
    fontFamily: 'Montserrat'
  },
  preco: {
    color: "black",
    fontSize: 40,
    fontWeight: "600",
    marginBottom: 20,
    maxHeight: 100,
    fontFamily: 'Montserrat'
  }
}) 