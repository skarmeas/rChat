import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/navigation/Routes';

export default function Providers() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}
