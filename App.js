import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import SegundaPagina from './src/screens/SegundaPagina';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Formulário' }}
        />
        <Stack.Screen
          name="SegundaPagina"
          component={SegundaPagina}
          options={{ title: 'Segunda Página' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
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
    marginBottom: 10,
    marginTop: 10,
  },
  textContainer2: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: 70,
    borderColor: 'gray',
    marginBottom: 10,
    margin: 30,
  },
  lista: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 70,
    borderColor: 'gray',
    marginBottom: 10,
    borderWidth: 1,
  },
  listaItem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 5,
    borderColor: 'gray',
    width: '100%',
    textAlign: 'center',
    marginTop: 5,
  },
  animatedContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  animatedView: {
    width: 200,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    opacity: 0.5,
  },
  animatedText: {
    color: 'white',
    fontSize: 16,
  },
});
