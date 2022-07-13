import React, { useEffect, useState } from 'react';
import { Home } from './pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getInstalledInjectedConnectors, StarknetProvider } from '@starknet-react/core';
import { Provider } from 'starknet';
import { GlobalStyle } from './theme';

function App() {
  const connectors = getInstalledInjectedConnectors();

  return (
    <>
      <GlobalStyle />
      <StarknetProvider
        connectors={connectors}
        autoConnect
        defaultProvider={new Provider({ baseUrl: 'http://localhost:500' })}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </StarknetProvider>
    </>
  );
}

export default App;
