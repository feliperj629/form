import React from 'react';
import { FlatList, Text } from 'react-native';
import { listaStyles } from '../styles/listaStyles';

const dados = [
    { id: '1', title: 'Felipe' },
    { id: '2', title: 'João' },
    { id: '3', title: 'Maria' },
    { id: '4', title: 'José' },
    { id: '5', title: 'Ana' },
];

export default function Lista() {
    return (
        <FlatList
            data={dados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Text style={listaStyles.listaItem}>{item.title}</Text>}
        />
    );
} 