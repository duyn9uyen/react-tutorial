// Following this tutorial: https://react.dev/learn/tutorial-tic-tac-toe
import { useState } from 'react';


// In React, it’s conventional to use "onSomething" names for props which represent (javascript) events
// and handleSomething for the function definitions which handle those events.
function Square({ value, onSquareClick }) {

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // defaults to an array of 9 nulls corresponding to the 9 squares
  // when you fill the board, the array will look like this:
  // ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      {/* Notice the new () => syntax. Here, () => handleClick(0) is an arrow function,
      which is a shorter way to define functions.
      When the square is clicked, the code after the => “arrow” will run,
      calling handleClick(0).

      This is passing (rather than calling) these functions down as props like
      onSquareClick={handleFirstSquareClick}

      */}
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
