import { useState } from 'react';
import './App.css';
import Title from './start/Title';
import Start from './start/Start';
import Game from './home/Game';

import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'

const App = () => {
  const [sizeBoard, setSizeBoard] = useState(10)
  const handleSelection = (value) => setSizeBoard(value)
  
  return (
    <div className="App">
      <Title />
      <Router>
        <Routes>
          <Route path='/home' element={
            <Start handleSelection={handleSelection} />
          } />
          <Route path='/game' element={
            <Game size={sizeBoard} />
          } />
          <Route path='/' element={
            <Navigate to="/home" />
          } />
          <Route path='/*' element={
            <h2>ERROR 404 NOT FOUND</h2>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
