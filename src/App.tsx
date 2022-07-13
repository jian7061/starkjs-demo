import React, { useEffect, useState } from 'react';
import { Home, Sign, Token } from './pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getInstalledInjectedConnectors, StarknetProvider } from '@starknet-react/core';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'starknet';
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function App() {
  const connectors = getInstalledInjectedConnectors();

  return (
    <ChakraProvider>
      <StarknetProvider
        connectors={connectors}
        autoConnect
        defaultProvider={new Provider({ baseUrl: 'http://localhost:500' })}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/second' element={<Sign />} />
            <Route path='/third' element={<Token />} />
          </Routes>
        </Router>
      </StarknetProvider>
    </ChakraProvider>
  );
}

export default App;
