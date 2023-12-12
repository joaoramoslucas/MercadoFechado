import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  sacola: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF', 
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 2, 
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', 
  },
  productPrice: {
    fontSize: 16,
    color: 'black', 
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#f14242',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    flex: 1,
    marginRight: 8,
    fontWeight: 'bold',
  },
  fim: {
    backgroundColor: '#78c30c',
    color: 'black',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  texto: {
    paddingLeft: 27,
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
    paddingLeft: 100,
    color: 'red', 
  },
    botaoAdd : {
    fontSize: 20,
    paddingLeft: 30,
    color: 'green', 
  },
  
});
