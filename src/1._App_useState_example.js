// Following this tutorial: https://react.dev/learn/tutorial-tic-tac-toe
import { useState } from 'react';

function Square() {
  // value; stores the value
  // setValue; is a function that can be used to change the value
  // The null passed to useState is used as the initial value for this state variable, so value here starts off equal to null.

  // You can give them any names, but the convention is to write [something, setSomething].
  const [value, setValue] = useState(null);

  function handleClick() {
    console.log('clicked!');
    setValue('X');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    // Your component also can’t return multiple JSX tags.
    // You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:
    <>
      {/* Using the 'square' component */}
      <div className="board-row">
        {/* Each Square has its own state: the value stored in each Square is completely independent of the others. */}
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );

}
