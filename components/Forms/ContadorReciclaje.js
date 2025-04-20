import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

export default function ContadorReciclaje() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
        <View style={styles.container}>
          <Text style={styles.contador}>+300 reciclajes</Text>
          <Text style={styles.subtexto}>Objetos reciclados en nuestra comunidad</Text>
        </View>

       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  contador: {
    fontSize: 45,
    color: '#8e5656',
    fontFamily:'mi-fuente',
  },
  subtexto: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
    fontFamily:'mi-fuente',
  
  },
});
