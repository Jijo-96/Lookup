import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./app";
import { ResultContextProvider } from "../src/context/ResultContext";
import "./index.css";

ReactDOM.render(
    <ResultContextProvider>
      <Router>
        <App />
      </Router>
    </ResultContextProvider>,
  document.getElementById("root")
);
