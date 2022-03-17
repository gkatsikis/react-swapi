import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
      <h1>Star Wars Starships</h1>
      <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/starship" element={<StarshipDetails />} />
      </Routes>
    </>
    )
}

export default App;
