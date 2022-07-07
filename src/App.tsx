import React, { useEffect, useState } from 'react';
import { Home, Second, Third } from './pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/second' element={<Second />} />
        <Route path='/third' element={<Third />} />
      </Routes>
    </Router>
  );
}

export default App;
