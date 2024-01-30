import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    input: {
      height: 40,
      width: '80%',
      borderRadius: 25,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
    },
    loginText: {
      height: 70,
      fontSize: 25,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    button: {
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 5,
    },
  });

  export default s;