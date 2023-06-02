import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/gatinho.jpg')}/>
      <Text style={styles.text}>Bem vindo ao CalvouClub</Text>
      <Text style={styles.text2}>Nós somos um grupo que apoia a calvice em gatos e distribui serotonina de graça!</Text>
      <Text style={styles.text2}>Aqui nós apreciamos gatinhos calvos. Se não for a favor, favor se retirar.</Text>
      <Link style={styles.link} href="/home">Clique para mais imagens de gatinhos calvos</Link>
      <Text style={styles.text3}>gatinhos calvos!</Text>
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

  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 15,
    fontWeight: 'feather bold',
    marginTop: 5,
  },
  link:{
    marginTop: 5,
    fontWeight: 'bold',
  },
  text3: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'feather bold',
    marginTop: 5,
  },
});
