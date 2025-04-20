import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const testimonios = [
  { id: '1', comentario: "Me encanta Recinova, encontré cosas súper útiles!", estrellas: 5 },
  { id: '2', comentario: "Una gran iniciativa, pude donar objetos sin problema.", estrellas: 4 },
  { id: '3', comentario: "Gracias a esta plataforma, mi viejo escritorio tiene nuevo dueño!", estrellas: 5 },
  { id: '4', comentario: "Fácil de usar y realmente ayuda a reducir el desperdicio.", estrellas: 4 },
  { id: '5', comentario: "Excelente comunidad para compartir y reciclar!", estrellas: 5 },
];

const TestimoniosSlider = () => {
  return (
    <FlatList
      data={testimonios}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.testimonio}>
          <Text style={styles.comentario}>{item.comentario}</Text>
          <Text style={styles.estrellas}>{"⭐".repeat(item.estrellas)}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  testimonio: {
    width: 250,
    marginRight: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3, // Agrega sombra en Android
  },
  comentario: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    fontFamily:'mi-fuente'
  },
  estrellas: {
    fontSize: 18,
  },
});

export default TestimoniosSlider;
