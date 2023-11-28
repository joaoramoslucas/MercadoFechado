import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

import { styles } from '../SearchBar/styles'

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
