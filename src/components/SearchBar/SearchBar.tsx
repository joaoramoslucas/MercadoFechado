import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

interface CustomSearchBarProps {
    onSearch: (searchText: string) => void;
}
export const CustomSearchBar: React.FC<CustomSearchBarProps> = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Pesquisar produto"
                style={styles.input}
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />
            <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
                <Text style={styles.buttonText}>Ir</Text>
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