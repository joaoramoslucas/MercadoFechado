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
    paddingTop: 30,
    height: '100%',
    width: '100%',
  },
  containerProduct: {
    backgroundColor: "white",
    padding: 5,
    alignSelf: 'center',
    width: 350,
    height: 350,
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
    marginLeft: 20,
  },
  image: {
    marginRight: 60,
    width: "100%",
    height: "100%",
  },
  viewImage: {
    width: 140,
    height: 140,
  },
  quantidade: {
    marginLeft: 10,
    height: 20,
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: 'Montserrat'
  },
  descricao: {
    marginTop: 20,
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    maxHeight: 100,
    fontFamily: 'Montserrat'
  },
  preco: {
    color: "black",
    fontSize: 35,
    marginTop: 15,
    marginVertical: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Montserrat'
  },
  headerLeft: {
    marginTop: -10,
    marginLeft: 20, 
  },
  texto: {
    textAlign: "center",
    marginTop: 5,
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    maxHeight: 100,
    fontFamily: 'Montserrat'
  },
}) 