import * as Font from 'expo-font';

// Cargar todas las fuentes aquí
export const loadFonts = async () => {
  await Font.loadAsync({
    'mi-fuente': require('../assets/fonts/quicksand.ttf'), // Reemplazá con el nombre de tu fuente
  });
};
