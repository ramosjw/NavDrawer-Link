import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/gatinho.jpg')}/>
      <Text style={styles.text}>CalvouClub</Text>
      <Link style={styles.link} href="/sobre">Clique para saber mais</Link>

      <View style={styles.imagens}>
      <img style={styles.imagem} src={'../assets/calvo 6.avif'} alt="Image" />
      <img style={styles.imagem} src={'../assets/calvo 7.jpg'} alt="Image" />
      </View>

      <View style={styles.imagens}>
      <img style={styles.imagem} src={'../assets/calvo 8.jpg'} alt="Image" />
      <img style={styles.imagem} src={'../assets/gato calvo 1.jpg'} alt="Image" />
      </View>

      <View style={styles.imagens}>
      <img style={styles.imagem} src={'../assets/gato calvo 3.jpg'} alt="Image" />
      <img style={styles.imagem} src={'../assets/gato calvo 4.jpg'} alt="Image" />
      </View>

      <View style={styles.imagens}>
      <img style={styles.imagem} src={'../assets/gato calvo 5.jpeg'} alt="Image" />
      <img style={styles.imagem} src={'../assets/impostor.jpg'} alt="Image" />
      </View>
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
  link: {
    marginBottom: 5,
    marginTop: 5,
  },
  image:{
    width: 140,
    height: 140,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  imagens:{
    flexDirection:'row',
    justifyContent:'center',
  },
  imagem: {
    width:160,
    height: 120,
    margin:3,
  },
});
