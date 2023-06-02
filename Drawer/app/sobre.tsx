import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/gatinho.jpg')}/>
      <Text style={styles.text}>CalvouClub</Text>
      <Text style={styles.text2}>O gato (nome científico: Felis silvestris catus) ou gato doméstico é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação. Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos. Segundo pesquisas realizadas por instituições norte-americanas, os gatos consistem no segundo animal de estimação mais popular do mundo, estando numericamente atrás apenas dos peixes de aquário.[4][5] Consta em trigésimo nono na lista das 100 das espécies exóticas invasoras mais daninhas do mundo da União Internacional para a Conservação da Natureza (UICN).[6]</Text>
      <Link style={styles.link} href="/cadastro">Clique para fazer cadastro no clube!</Link>
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
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  }, 
  text2:{
    fontSize: 15,
    fontWeight: 'feather bold',
    textAlign: 'center',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 5,
    marginBottom: 5,
  },
  link:{
    fontWeight:'bold',
  },
  image:{

  }
});