import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home'; // Tu página principal
import FirstPage from './components/FirstPage'; // La segunda página

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Second" component={FirstPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
