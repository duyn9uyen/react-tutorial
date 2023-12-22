// Following this tutorial: https://react.dev/learn/tutorial-tic-tac-toe
import { useState } from 'react';

function Square({ value, onSquareClick }) {

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// The export JavaScript keyword makes this function accessible outside of this file.
// The default keyword tells other files using your code that it’s the main function in your file.
export default function Board() {

  // Each time a player moves, xIsNext (a boolean) will be flipped
  // to determine which player goes next and the game’s state will be saved
  const [xIsNext, setXIsNext] = useState(true);

  // defaults to an array of 9 nulls corresponding to the 9 squares
  // when you fill the board, the array will look like this:
  // ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    // You’ll check to see if the square already has a X or an O.
    // If the square is already filled, you will return in the handleClick
    // function early—before it tries to update the board state.
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    // React components need to return a single JSX element and
    // not multiple adjacent JSX elements like two buttons.
    // To fix this you can use fragments (<> and </>)
    <>
      {/* Notice the new () => syntax. Here, () => handleClick(0) is an arrow function,
      which is a shorter way to define functions.
      When the square is clicked, the code after the => “arrow” will run,
      calling handleClick(0). */}
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );

}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
