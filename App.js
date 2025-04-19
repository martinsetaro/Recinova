import React , {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View , Image ,TouchableOpacity } from 'react-native';
import { loadFonts } from './components/fonts';  // Importas la función desde el archivo fonts.js
import principal from './assets/img/principal.jpg';

const { width, height } = Dimensions.get('window'); 

export default function App() {


  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await loadFonts();  // Cargamos las fuentes
      setFontsLoaded(true);  // Cuando las fuentes se carguen, cambiamos el estado
    }

    load();
  }, []);  // El array vacío significa que solo se ejecuta una vez



  return (
  <View style={styles.container}>
      {/* Imagen ocupando la parte superior */}
      <View style={styles.imageContainer}>
        <Image source={principal} style={styles.image} />
      </View>

      {/* Contenedor para el título y los botones */}
      <View style={styles.content}>
        <Text style={styles.title}>Recinova</Text>

        {/* Botones */}
        <View style={styles.buttonContainer}>
             <TouchableOpacity style={styles.button} onPress={() => alert('Formulario')}>
               <Text style={styles.buttonText}>Llenar</Text>
               <Text style={styles.buttonText}>formulario</Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.button} onPress={() => alert('Buscar ubicación')}>
               <Text style={styles.buttonText}>Buscar</Text>
               <Text style={styles.buttonText}>mi localidad</Text>
             </TouchableOpacity>
        </View>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: width,
    height: height * 0.4,
    marginBottom:180 // La imagen ocupa el 40% de la pantalla
  },
  image: {
    width: '100%',
    height: height * 0.6,
    resizeMode: 'cover',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 44,
    marginBottom: 20,
    fontFamily:'mi-fuente',
  },
  buttonContainer: {
    flexDirection: 'row', // Para que los botones estén en línea
    gap: 20, // Espaciado entre ellos
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center', // Asegura que los textos estén centrados
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontFamily:'mi-fuente'
  },
});
