import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home'; // Tu página principal
import FirstPage from './components/FirstPage'; // La segunda página
import FormularioLogin from './components/Forms/FormularioLogin';
import SegundaPresentacion from './components/SegundaPresentacion';
import TerceraPresentacion from './components/TerceraPresentacion';
import Inicioregistro from './components/Forms/Inicioderegistro';
import LoginEntrada from './components/Forms/Login';





const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Second" component={FirstPage} options={{ headerShown: false }}  />
        <Stack.Screen name="Formulario" component={FormularioLogin} options={{ headerShown: false }}  />
        <Stack.Screen name="SegundaPresentacion" component={SegundaPresentacion} options={{ headerShown: false }}  />
        <Stack.Screen name="TerceraPresentacion" component={TerceraPresentacion} options={{ headerShown: false }}  />
        <Stack.Screen name="Inicioregistro" component={Inicioregistro} options={{ headerShown: false }}  />
        <Stack.Screen name="LoginEntrada" component={LoginEntrada} options={{ headerShown: false }}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
