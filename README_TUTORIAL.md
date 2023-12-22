# Tutorial on React
https://react.dev/learn/tutorial-tic-tac-toe#making-an-interactive-component

React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. React components are JavaScript functions that return markup:

```
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

Now that you’ve declared MyButton, you can nest it into another component:
The export default keywords specify the main component in the file.
```
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

```


## To start the local app

> $ npm start


# Terminologies
JSX element - A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display. Ex. Below, `<button>` is a JSX element.

index.js - This file is the bridge between the component you created in the App.js file and the web browser.

```
export default function Square() {
  return <button className="square">X</button>;
}
```

# Components
A component is a piece of reusable code that represents a part of a user interface. Components are used to render, manage, and update the UI elements in your application.

It is basically a function that returns a JSX element

```
// a square component
function Square() {
  return <button className="square">1</button>;
}
```

The `export` JavaScript keyword makes this function accessible outside of this file. The `default` keyword tells other files using your code that it’s the main function in your file.


In this example, App.js is the main component.

# Props
These are just component Function params.

Here, `value` and `onSquareClick` are props.
```
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```

# State
React provides a special function called `useState` that you can call from your component to let it “remember” things.

```
import { useState } from 'react';

function Square() {

  // value stores the value and setValue is a function that can be used to change the value
  const [value, setValue] = useState(null);

  function handleClick() {
    //...
```

*It is best to store state in the main (parent) component, and not in individual sub components. That makes it easier to understand and easier to maintain.

- To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead.

- The parent component can pass that state back down to the children via props.

- "Lifting state" into a parent component is common when React components are refactored.

- You cannot update the parent's state directly from a child component. You’ll pass down a function from the Board component to the Square component, and you’ll have Square call that function when a square is clicked. See the `_App_lifting_state_up.js` file for example.

- when you call the "set" functions to save state, it re-renders a component.

# Hooks
https://react.dev/learn#using-hooks


Functions starting with use are called Hooks. useState is a built-in Hook provided by React. You can find other built-in Hooks in the API reference. You can also write your own Hooks by combining the existing ones. Hooks are functions that let you “hook into” React state and lifecycle features from function components.

Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.

