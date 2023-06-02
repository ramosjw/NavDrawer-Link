import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/gatinho.jpg')}/>
      <Text style={styles.text}>CalvouClub</Text>
      <Link href="/index1">Volte para o Início</Link>
      <TextInput
        style={styles.input}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        secureTextEntry
      />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Salvar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}> Voltar </Text>
          <Link href="/sobre"/>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c3c3c3',
  },
  image:{
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1a181b',
    borderRadius: 15,
    width: 350,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button2: {
    backgroundColor: '#1a181b',
    borderRadius: 15,
    width: 350,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 0,
  },
  buttonText2: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 350,
    marginTop: 8,
    paddingHorizontal: 16,
  },
});
