import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';

function App() {
  return (
    <>
      <h1>Star Wars Starships</h1>
      <StarshipList />
    </>
    )
}

export default App;
