import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      {/* Configuração da barra de status */}
      <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
      {/* Componente de rotas do aplicativo */}
      <Routes/>
    </NavigationContainer>
  );
}