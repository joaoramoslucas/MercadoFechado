import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  sacola: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF', 
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    elevation: 2, 
  },
  productInfo: {
    padding: 5,
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black', 
  },
  productPrice: {
    padding: 10,
    fontSize: 20,
    color: 'black', 
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#f14242',
    color: '#fff',
    padding: 12,
    borderRadius: 20,
    textAlign: 'center',
    flex: 1,
    marginRight: 10,
    fontWeight: 'bold',
  },
  fim: {
    backgroundColor: '#78c30c',
    color: 'black',
    padding: 12,
    borderRadius: 20,
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  texto: {
    paddingLeft: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 8,
  },
  quantityButton: {
    fontSize: 30,
    paddingLeft: 50,
    paddingRight: 20,
    color: 'red', 
  },
    botaoAdd : {
    fontSize: 25,
    paddingLeft: 50,
    paddingRight: 20,
    color: 'green', 
  },
  total: {
    color: 'green',
    fontSize: 35,
    textAlign: 'center',
    padding: 15
  }
  
});
