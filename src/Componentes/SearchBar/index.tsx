import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import { s } from '../SearchBar/styles'

interface CustomSearchBarProps {
    onSearch: (searchText: string) => void;
}
export const CustomSearchBar: React.FC<CustomSearchBarProps> = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };
    return (
        <View style={s.container}>
            <TextInput
                placeholder="Pesquisar produto"
                style={s.input}
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
            />
            <TouchableOpacity onPress={handleSearch} style={s.searchButton}>
                <Text style={s.buttonText}>Ir</Text>
            </TouchableOpacity>
        </View>
    );
}; 
