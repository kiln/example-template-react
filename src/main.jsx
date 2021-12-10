import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let flourishState = {
  numCircles: 25,
  theme: "light",
};

function renderApp(state) {
  ReactDOM.render(
    <React.StrictMode>
      <App style="height: 100%" state={state} />
    </React.StrictMode>,
    document.getElementById("app")
  );
}

let template = {
  data: {},

  state: flourishState,

  update() {
    renderApp(flourishState);
  },

  draw() {
    renderApp(flourishState);
  },
};

window.template = template;
