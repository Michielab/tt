require("./index.css");
import { render } from "react-dom";
import App from "./components/App";
import React from "react";
import { Router } from "react-router-dom";
import history from "./components/History";

import "./index.css";

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("app")
);
