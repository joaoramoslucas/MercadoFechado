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
                style={styles.input}
                placeholder="Pesquisar produto"
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
        borderWidth: 1,
        borderColor: '#b42424',
        paddingHorizontal: 15,
        marginTop: 15,
        marginHorizontal: 40,
    },
    input: {
        flex: 1,
        fontSize: 13,
        height: 50,
        color: '#d1d0d0',
    },
    searchButton: {
        fontSize: 11,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius:10,
        borderColor: '#b42424',
        paddingHorizontal: 15,
        marginLeft: 10,
    },
    buttonText: {
        color: '#000000',
    },
});