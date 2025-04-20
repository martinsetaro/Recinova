import { View ,Text , StyleSheet , Image , ScrollView , TouchableOpacity , SafeAreaView} from 'react-native';
import { StatusBar, Platform } from 'react-native';
import Imagen1 from '../assets/img/menbox4.png'


const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export default function SegundaPresentacion({navigation}){


   return(
   <SafeAreaView style={{ flex: 1, paddingTop }}>
    <ScrollView contentContainerStyle={styles.container}>
     <View style={styles.container}>
       <View style={styles.contenedorImagen}>
          <Image source={Imagen1} style={styles.Imagen}/>
       </View>
          <Text style={styles.subtitulo}>
          Regístrate y conecta directamente con quienes necesitan aquello que ya no usas, dándole una nueva vida a tus objetos.
          </Text>
          
          <TouchableOpacity
          style={styles.btnNavegacion}
          onPress={()=> navigation.navigate('TerceraPresentacion')}>
            <Text style={styles.textoBoton}>
            Siguiente
            </Text>
          </TouchableOpacity>
     </View>
     </ScrollView>
     </SafeAreaView>
    
   );
}

const styles = StyleSheet.create({
 container:{
    flexGrow: 1,
    
 },
 contenedorImagen: {
  width: '100%',
  alignItems: 'center',
  padding: 10,
  marginTop:20,
},
Imagen:{
  width: '100%',
  height: 500, // Ajusta la altura según sea necesario
  resizeMode: 'contain', // O 'cover' dependiendo de tu preferencia
},
Titulo:{
    fontSize:40,
    textAlign:'center',
    marginTop:40,
    marginBottom:20,
    color:'#9d5f5f',
},
TituloSegundo:{
    fontSize:35,
    textAlign:'center',
    marginBottom:40,
    color:'#9d5f5f',
    fontFamily:'mi-fuente',
},
subtitulo:{
    fontSize:20,
    textAlign:'center',
    marginTop:10,
    padding:10,
    marginBottom:20,
    color:'#9d5f5f',
},
testimonios:{
    fontSize:50,
    textAlign:'center',
    fontWeight:300,
    color:'#9d5f5f',
    
},
contenedorTestimonio:{
    height:140,
    marginBottom:50,
    marginTop:30,
},
contenedorContador:{
    height:130,
    marginBottom:60,
    marginTop:20,
},
btnNavegacion:{
  alignSelf: 'center',
  paddingHorizontal: 20,
  paddingVertical: 10,
  backgroundColor: '#9d5f5f',
  borderRadius: 10,
},
textoBoton:{
    color:'#ffffff',
    textTransform:'uppercase',
    fontSize:20,
    fontStyle:'italic',
}

});