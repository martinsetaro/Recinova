import { View ,Text , StyleSheet , Image , ScrollView , TouchableOpacity} from 'react-native';
import Imagen1 from '../assets/img/iconos.png'
import TestimoniosSlider from './Forms/TestimonioSlider';
import ContadorReciclajes from './Forms/ContadorReciclaje';


export default function Presentacion({navigation}){


   return(
   
    <ScrollView contentContainerStyle={styles.container}>
     <View style={styles.container}>
          <Text style={styles.Titulo}>
            Bienvenidos a Recinova
          </Text>
          <Image source={Imagen1} style={styles.Imagen}/>
          <Text style={styles.subtitulo}>
          En Recinova te damos la oportunidad de compartir objetos que ya no usas con quienes los necesitan. Publica productos que deseas regalar o intercambiar, permitiendo que otros los retiren sin costo. Algunos artículos pueden tener un valor simbólico dependiendo de su estado, pero lo importante es fomentar la reutilización y evitar el desperdicio. Nuestra comunidad se basa en la idea de darles una segunda vida a los objetos y promover un consumo más responsable.
          </Text>
          <Text style={styles.testimonios}>
            Testimonios
          </Text>
          <View style={styles.contenedorTestimonio}>
             <TestimoniosSlider/>
          </View>
          <View style={styles.contenedorContador}>
            <ContadorReciclajes/>
          </View>
          <Text style={styles.TituloSegundo}>
          Cada acción cuenta, empieza hoy!.
          </Text>
          <TouchableOpacity
          style={styles.btnNavegacion}
          onPress={()=> navigation.navigate('Formulario')}>
            <Text style={styles.textoBoton}>
            Regístrate gratis
            </Text>
          </TouchableOpacity>
     </View>
     </ScrollView>
    
   );
}

const styles = StyleSheet.create({
 container:{
    flexGrow: 1,
    backgroundColor:'#fdd6bb'
 },
Imagen:{
    width:'100%',
    height:400,
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
    marginTop:20,
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
    backgroundColor:'#8e5656',
    marginBottom:40,
    height:70,
    padding:20,
    alignItems:'center',
},
textoBoton:{
    color:'#ffffff',
    textTransform:'uppercase',
    fontSize:20,
    fontStyle:'italic',
}

});