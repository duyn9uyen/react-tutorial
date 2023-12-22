// Following this tutorial: https://react.dev/learn/tutorial-tic-tac-toe
// This file is the bridge between the component you created in the App.js file and the web browser.

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);