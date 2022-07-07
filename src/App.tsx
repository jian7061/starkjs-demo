import React, { useEffect, useState } from 'react';
import { Home, Second, Third } from './pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getInstalledInjectedConnectors, StarknetProvider } from '@starknet-react/core';

function App() {
  const connectors = getInstalledInjectedConnectors();

  return (
    <StarknetProvider connectors={connectors} autoConnect>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/second' element={<Second />} />
          <Route path='/third' element={<Third />} />
        </Routes>
      </Router>
    </StarknetProvider>
  );
}

export default App;
