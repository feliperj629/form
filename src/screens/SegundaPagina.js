import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SegundaPagina({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Segunda Página</Text>
            <Button
                title="Voltar para Home"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
}); 