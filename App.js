import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');
  const [profissao, setProfissao] = useState('');
  const imageUrl = 'https://media.licdn.com/dms/image/v2/C4D03AQG6ZX9aI-x1ag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1609855142045?e=1747872000&v=beta&t=wwnSeIrrCPLXyld12vySVSFXfdrIbtcK6g6uRvU2GSU';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meu primeiro app Mobile!</Text>
      <Image source={{ uri: imageUrl }} style={styles.logo} />
      <StatusBar style="auto" />

      <TextInput style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput style={styles.input}
        placeholder="Digite seu sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <TextInput style={styles.input}
        placeholder="Digite sua idade"
        value={idade}
        onChangeText={setIdade}
      />
      <TextInput style={styles.input}
        placeholder="Sua profissão:"
        value={profissao}
        onChangeText={setProfissao}
      />

      {nome && sobrenome && (
        <Text style={styles.text}>Nome: {nome} {sobrenome}</Text>
      )}
      {idade && (
        <Text style={styles.text}>Idade: {idade} </Text>
      )}
      {profissao && (
        <Text style={styles.text}>Profissão: {profissao} </Text>
      )}

      <Button title="Salvar" onPress={() => alert('Seu nome é: ' + nome + ' e seu sobrenome é: ' + sobrenome + ' e sua idade é: ' + idade)} />
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    opacity: 0.8,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
