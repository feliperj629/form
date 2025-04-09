import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
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
}); 