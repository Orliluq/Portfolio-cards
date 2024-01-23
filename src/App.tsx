/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import IntroPage from './pages/IntroPage';
import AboutPage from './pages/AboutPage';
import ExperiencesPage from './pages/ExperiencesPage';
import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [page, setPage] = useState(0);
  
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<IntroPage/>}/>
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/experiences' element={<ExperiencesPage/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;