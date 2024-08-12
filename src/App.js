import { useState } from 'react';
import './App.css';
import Square from './Square.js';

function App() {
  const[square, setSquare] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquare = square.splice();
    nextSquare[i] = 'X';
    setSquare(nextSquare);
  }

  return(
    <div className="app">
      <div className="board-row">
        <Square onSquareClick={() => handleClick(1)} value={square[1]}/>
        <Square onSquareClick={() => handleClick(2)} value={square[2]}/>
        <Square onSquareClick={() => handleClick(3)} value={square[3]}/>
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(4)} value={square[4]}/>
        <Square onSquareClick={() => handleClick(5)} value={square[5]}/>
        <Square onSquareClick={() => handleClick(6)} value={square[6]}/>
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(7)} value={square[7]}/>
        <Square onSquareClick={() => handleClick(8)} value={square[8]}/>
        <Square onSquareClick={() => handleClick(9)} value={square[9]}/>
      </div>
    </div>
  );
}

export default App;
