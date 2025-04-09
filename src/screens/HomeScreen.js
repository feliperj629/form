import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AnimatedView from '../components/AnimatedView';
import Lista from '../components/Lista';
import { homeScreenStyles } from '../styles/homeScreenStyles';

export default function HomeScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');
    const [profissao, setProfissao] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const imageUrl = 'https://media.licdn.com/dms/image/v2/C4D03AQG6ZX9aI-x1ag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1609855142045?e=1747872000&v=beta&t=wwnSeIrrCPLXyld12vySVSFXfdrIbtcK6g6uRvU2GSU';

    return (
        <ScrollView>
            <View style={homeScreenStyles.container}>
                <Text style={homeScreenStyles.text}>Formulário de Cadastro</Text>
                <Image source={{ uri: imageUrl }} style={homeScreenStyles.logo} />

                <StatusBar style="auto" />

                <TextInput style={homeScreenStyles.input}
                    placeholder="Digite seu nome"
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput style={homeScreenStyles.input}
                    placeholder="Digite seu sobrenome"
                    value={sobrenome}
                    onChangeText={setSobrenome}
                />
                <TextInput style={homeScreenStyles.input}
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput style={homeScreenStyles.input}
                    placeholder="Digite sua idade"
                    value={idade}
                    onChangeText={setIdade}
                />
                <TextInput style={homeScreenStyles.input}
                    placeholder="Sua profissão:"
                    value={profissao}
                    onChangeText={setProfissao}
                />

                <View style={homeScreenStyles.textContainer}>
                    <Text style={homeScreenStyles.text2}>Dados do usuário:</Text>
                    {nome && sobrenome && (<Text style={homeScreenStyles.text2}>Nome: {nome} {sobrenome}</Text>)}
                    {email && (<Text style={homeScreenStyles.text2}>Email: {email} </Text>)}
                    {idade && (<Text style={homeScreenStyles.text2}>Idade: {idade} </Text>)}
                    {profissao && (<Text style={homeScreenStyles.text2}>Profissão: {profissao} </Text>)}
                </View>
                <Button title="Salvar" onPress={() => alert('Seu nome é: ' + nome + ' e seu sobrenome é: ' + sobrenome + ' e sua idade é: ' + idade)} />

                <View style={homeScreenStyles.textContainer2}>
                    <Text style={homeScreenStyles.text2}>Informe seu texto:</Text>
                    <TextInput style={homeScreenStyles.input} value={text} onChangeText={setText} />
                    <Button title="Exibir" onPress={() => alert("O texto digitado é: " + text)} />
                </View>

                <View style={homeScreenStyles.lista}>
                    <Text style={homeScreenStyles.text2}>Lista de usuários:</Text>
                    <Lista />
                </View>

                <AnimatedView />

                <Button
                    title="Ir para Segunda Página"
                    onPress={() => navigation.navigate('SegundaPagina')}
                />
            </View>
        </ScrollView>
    );
} 