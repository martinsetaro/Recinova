import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import bkgPrincipal from '../../assets/img/bkgform.png';

export default function FormularioLogin({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [aceptaCondiciones, setAceptaCondiciones] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (email !== confirmEmail) {
      setError('Los correos electrónicos no coinciden');
      return;
    }
    if (!aceptaCondiciones) {
      setError('Debes aceptar los términos para continuar');
      return;
    }
    alert('Formulario enviado con éxito');
    setError('');
  };

  return (
    <ImageBackground source={bkgPrincipal} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Registro de Usuario</Text>

        <TextInput style={styles.input} placeholder="Nombre" onChangeText={setNombre} value={nombre} />
        <TextInput style={styles.input} placeholder="Apellido" onChangeText={setApellido} value={apellido} />
        <TextInput style={styles.input} placeholder="Teléfono" onChangeText={setTelefono} value={telefono} keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Correo Electrónico" onChangeText={setEmail} value={email} keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Confirmar Correo Electrónico" onChangeText={setConfirmEmail} value={confirmEmail} keyboardType="email-address" />

        <CheckBox
          title="Acepto otorgar mis datos personales"
          checked={aceptaCondiciones}
          onPress={() => setAceptaCondiciones(!aceptaCondiciones)}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Volver al Inicio</Text>
        </TouchableOpacity>
      </ScrollView>
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
    width:350,
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 35,
    marginBottom: 30,
    marginTop:130,
    color:'#9d5f5f',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor:'#ffffff'
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#8e5656',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
