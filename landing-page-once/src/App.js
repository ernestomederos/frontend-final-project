import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AmorSuicida from './routes/AmorSuicida';
import Mora from './routes/Mora';
import Contigo from './routes/Contigo';
import NotFound from './routes/NotFound';
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<AmorSuicida />} />
        <Route path='mora' element={<Mora />} />
        <Route path='contigo' element={<Contigo/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;