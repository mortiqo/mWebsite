import React from 'react';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kikut from './pages/kikut';
import Ulrikken from './pages/ulrikken'
import Hardangerjokulen from './pages/hardangerjokulen'
import Floien from './pages/floien'
import Lyderhorn from './pages/lyderhorn';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/lyderhorn' element={<Lyderhorn />} />
        <Route path='/kikut' element={<Kikut />} />
        <Route path='/hardangerjokulen' element={<Hardangerjokulen/>} />
        <Route path='/floien' element={<Floien />} />
        <Route path='/ulrikken' element={<Ulrikken />} />
      </Routes>
    </Router>
  );
}

export default App;
