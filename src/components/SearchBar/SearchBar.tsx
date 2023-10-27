import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

interface CustomSearchBarProps {
    onSearch: (searchText: string) => void;
}
const CustomSearchBar: React.FC<CustomSearchBarProps> = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Pesquisar no Mercado Preso"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
                style={styles.input}
            />
            <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
                <Text style={styles.buttonText}>Pesquisar</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 10,
        marginTop: 10,
        marginHorizontal: 15
    },
    input: {
        flex: 1,
        fontSize: 16,
        height: 50
    },
    searchButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
    },
});
export default CustomSearchBar;