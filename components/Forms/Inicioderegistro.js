import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import bkgPrincipal from '../../assets/img/bkgform.png';

export default function Inicioregistro({ navigation }) {
  return (
    <ImageBackground source={bkgPrincipal} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a RECINOVA</Text>

        {/* Botón de Login */}
        <TouchableOpacity 
          style={styles.btnLogin} 
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textoBoton}>Iniciar Sesión</Text>
        </TouchableOpacity>

        {/* Botón de Registro */}
        <TouchableOpacity 
          style={styles.btnRegistro} 
          onPress={() => navigation.navigate('Formulario')}>
          <Text style={styles.textoBoton}>Registrarse</Text>
        </TouchableOpacity>

        {/* Botón de Google Sign-In (Aquí puedes usar algún SDK como Firebase para autenticar) */}
        <TouchableOpacity 
          style={styles.btnGoogle} 
          onPress={() => console.log('Iniciar con Google')}>
          <Text style={styles.textoBoton}>Continuar con Google</Text>
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
    backgroundColor: '#007AFF',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  btnRegistro: {
    width: '100%',
    padding: 15,
    backgroundColor: '#34C759',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  btnGoogle: {
    width: '100%',
    padding: 15,
    backgroundColor: '#DB4437',
    alignItems: 'center',
    borderRadius: 10,
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

