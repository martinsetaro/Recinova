import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground ,Image } from 'react-native';
import bkgPrincipal from '../../assets/img/bkgform.png';
import logogoogle from '../../assets/img/logogoogle.png';

export default function Inicioregistro({ navigation }) {
  return (
    <ImageBackground source={bkgPrincipal} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a RECINOVA</Text>

        {/* Botón de Login */}
        <TouchableOpacity 
          style={styles.btnLogin} 
          onPress={() => navigation.navigate('LoginEntrada')}>
          <Text style={styles.textosesion}>Iniciar Sesión</Text>
        </TouchableOpacity>

        {/* Botón de Registro */}
        <TouchableOpacity 
          style={styles.registro} 
          onPress={() => navigation.navigate('Formulario')}>
          <Text style={styles.registrar}>Registrarse</Text>
        </TouchableOpacity>

        {/* Botón de Google Sign-In (Aquí puedes usar algún SDK como Firebase para autenticar) */}
        

       <TouchableOpacity style={styles.btnGoogle} onPress={() => console.log('Iniciar con Google')}>
         <View style={styles.googleContent}>
           <Image
             source={logogoogle}
             style={styles.googleLogo}
           />
           <Text style={styles.textoBoton}>Continuar con Google</Text>
         </View>
       </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily:'mi-fuente',
  },
  btnLogin: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    borderWidth:1,
  },
  registro: {
    width: '100%',
    padding: 15,
    borderWidth:1,
    borderColor:'#9d5f5f',
    borderRadius:15,
   
    
  },
  registrar:{
    fontSize:20,
    color:'#9d5f5f',
    textAlign:'center',
  },
  btnGoogle: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // para Android
  },
  googleContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoBoton: {
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500',
  },
  googleLogo: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  textosesion:{
    color:'green',
    fontSize:20,
  }
});

