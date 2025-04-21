import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import iconouser from '../../assets/img/iconouser.png';

export default function LoginEntrada() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Simulación de una llamada al servidor
      const response = await fetch('https://tuservidor.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, contrasena }),
      });

      if (response.status === 200) {
        navigation.navigate('Home'); // Asegúrate de que la ruta "Home" exista
      } else {
        Alert.alert('Error', 'Credenciales incorrectas');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar al servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.contenedorImagen}>
            <Image source={iconouser} style={styles.imagen} />
        </View>
      <Text style={styles.titulo}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />

      {loading ? (
        <ActivityIndicator size="large" color="#fdd6bb" />
      ) : (
        <Button style={styles.btn} title="Iniciar sesión" onPress={handleLogin} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 44,
    marginBottom: 30,
    textAlign: 'center',
    color:'#9d5f5f',
    fontFamily:'mi-fuente',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  btn:{
    backgroundColor:'#fdd6bb',
  },
  contenedorImagen:{
    width: '100%',
  alignItems: 'center',
  padding: 10,
  marginTop:10,
  },
  imagen:{
    width: '100%',
    height: 100, // Ajusta la altura según sea necesario
    resizeMode: 'contain', 
  }
});


