import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header'
import Board from './Board'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);


  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <Board setScore={setScore} setHighScore={setHighScore} score={score} />
    </div>
  );
}

export default App;
