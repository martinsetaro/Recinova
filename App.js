import React , {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , Button } from 'react-native';
import { loadFonts } from './components/fonts';  // Importas la función desde el archivo fonts.js
import logo from './assets/img/logo.png';

export default function App() {


  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await loadFonts();  // Cargamos las fuentes
      setFontsLoaded(true);  // Cuando las fuentes se carguen, cambiamos el estado
    }

    load();
  }, []);  // El array vacío significa que solo se ejecuta una vez

  if (!fontsLoaded) {
    return <Text>Cargando fuentes...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recinova</Text>
  <Image source={logo} style={{ width: 100, height: 100 }}/>
  
  <Text style={styles.subtitle}>Renueva tu espacio, da una nueva vida</Text>
  <Button title="Empezar" />
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
  customText: {
    fontFamily: 'mi-fuente',  // Aquí aplicas la fuente cargada
  },
  title:{
    fontSize:45,
    fontFamily:'mi-fuente',
  },
  subtitle:{
    fontFamily:'mi-fuente',
    fontSize:20,
  }
});
