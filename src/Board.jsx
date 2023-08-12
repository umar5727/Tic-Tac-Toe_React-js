// import App from "./App";
import { useState } from "react";
import Square from "./Square";
const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [fisrtPlayer, setfirstPlayer] = useState(true);

  const clickhaldlers = (i) => {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice();
    if (fisrtPlayer) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquare(nextSquare);
    setfirstPlayer(!fisrtPlayer);
  };

  let winner=calculateWinner(square)
  let status;
  if (winner) {
    status = "Winner " + winner;
  }else{
    status='Next Player ' +(fisrtPlayer ? 'X':'O');
  }

  return (
    <div className="container">
      <h1 className="status">{status}</h1>
      <div className="row">
        <Square value={square[0]} onSquareClick={() => clickhaldlers(0)} />
        <Square value={square[1]} onSquareClick={() => clickhaldlers(1)} />
        <Square value={square[2]} onSquareClick={() => clickhaldlers(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onSquareClick={() => clickhaldlers(3)} />
        <Square value={square[4]} onSquareClick={() => clickhaldlers(4)} />
        <Square value={square[5]} onSquareClick={() => clickhaldlers(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onSquareClick={() => clickhaldlers(6)} />
        <Square value={square[7]} onSquareClick={() => clickhaldlers(7)} />
        <Square value={square[8]} onSquareClick={() => clickhaldlers(8)} />
      </div>
    </div>
  );
};

function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      
      [0, 4, 8],
      [2, 4, 6],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ]; 
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }
  
export default Board;
