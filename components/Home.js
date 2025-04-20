import React , {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image ,TouchableOpacity , ImageBackground , Dimensions } from 'react-native';
import { loadFonts } from '../components/fonts';  // Importas la función desde el archivo fonts.js
import bkgPrincipal from '../assets/img/bkgPrincipal.png';

const { width, height } = Dimensions.get('window'); 

export default function Home({navigation}) {


  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await loadFonts();  // Cargamos las fuentes
      setFontsLoaded(true);  // Cuando las fuentes se carguen, cambiamos el estado
    }

    load();
  }, []);  // El array vacío significa que solo se ejecuta una vez



  return (
    <ImageBackground source={bkgPrincipal}style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.textoTitulo}>
                  Recinova
                </Text>
                <Text style={styles.subTitulo}>
                Cada objeto merece una segunda oportunidad.
                </Text>
                 <TouchableOpacity
                 onPress={() => navigation.navigate('Second')}
                 style={styles.buttonStart}>
                  <Text style={styles.text}>
                   Ingresar
                  </Text>
                </TouchableOpacity>
            </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta la imagen para llenar el fondo
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    gap:15
  },
  text :{
    fontSize:25,
    fontFamily:'mi-fuente',
    marginBottom:5,
    textTransform:'uppercase',
    color:'#fff',
    fontWeight:900,
  },
  buttonStart:{
    backgroundColor:'#8e5656',
    width:160,
    height:80,
    alignItems:'center',
    borderRadius:15,
    justifyContent:'center',
    marginTop:35,
  },
  textoTitulo:{
   fontFamily:'mi-fuente',
   fontSize:50,
   textTransform:'uppercase',
  },
  subTitulo:{
    fontFamily:'mi-fuente',
    fontSize:18,
    textAlign:'center',
  }, 

});