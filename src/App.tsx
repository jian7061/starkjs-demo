import React, { useEffect, useState } from 'react';
import { Home } from './pages';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getInstalledInjectedConnectors, StarknetProvider } from '@starknet-react/core';
import { extendTheme, ChakraProvider, Container } from '@chakra-ui/react';
import { Provider } from 'starknet';

const theme = extendTheme();

function App() {
  const connectors = getInstalledInjectedConnectors();

  return (
    <ChakraProvider theme={theme}>
      <StarknetProvider
        connectors={connectors}
        autoConnect
        defaultProvider={new Provider({ baseUrl: 'http://localhost:500' })}>
        <Router>
          <Navbar />
          <Container maxW='2xl' bg='blue.200' centerContent>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Container>
        </Router>
      </StarknetProvider>
    </ChakraProvider>
  );
}

export default App;
